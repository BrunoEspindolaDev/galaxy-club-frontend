import { useState, useEffect } from "react";
import instance, { config } from "services/api";
import { Flex, useToast } from "@chakra-ui/react";
import ReservationNoData from "./ReservationNoData";
import ReservationLoading from "./ReservationLoading";
import ReservationList from "./ReservationList";
import ReservationItem from "./ReservationItem";
import Navbar from "components/Navbar";

const Reservation = () => {
  const [reservations, setReservations] = useState(null);
  const [isLoadingFind, setIsLoadingFind] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setIsLoadingFind(true);
      instance
        .get(
          `reservations?filters[users_permissions_user][id][$eq]=${loggedUser.id}&populate=equipament.image&populate=place.image`,
          config
        )
        .then(({ data }) => setReservations(data.data))
        .catch(() => {
          toast({
            status: "error",
            description: "Comportamento inesperado. Por favor, tente novamente!",
            duration: 500,
          });
        })
        .finally(() => setIsLoadingFind(false));
    }
  }, []);

  const handleDelete = (reservationId) => {
    setIsLoadingDelete(true);
    instance
      .delete(`reservations/${reservationId}`, config)
      .then(() =>
        setReservations((prev) => prev.filter((reservation) => reservation.id !== reservationId))
      )
      .catch(() => null)
      .finally(() => setIsLoadingDelete(false));
  };

  const showLoading = isLoadingFind;
  const showNoData = !isLoadingFind && (!reservations || reservations?.length === 0);
  const showReservationList = !isLoadingFind && reservations?.length > 0;

  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Navbar />
      <Flex flex={1} as="main" direction="column" align="center">
        <Flex
          as="section"
          alignSelf="center"
          direction="column"
          w="100%"
          maxW="999px"
          rounded="xl"
          rowGap={10}
          px={[8, 8, 8, 8, 0]}
          py={14}
        >
          {showLoading && <ReservationLoading />}
          {showNoData && <ReservationNoData />}
          {showReservationList && (
            <ReservationList>
              {reservations.map((reservation) => {
                const { id, attributes } = reservation;
                const equipament = attributes.equipament.data?.attributes;
                const place = attributes.place.data?.attributes;

                return (
                  <ReservationItem
                    id={id}
                    key={id}
                    name={!!equipament ? equipament.name : place.name}
                    isLoading={isLoadingDelete}
                    endDate={attributes.end_date}
                    startDate={attributes.start_date}
                    image={
                      !!equipament
                        ? equipament.image.data.attributes.url
                        : place.image.data.attributes.url
                    }
                    onDelete={handleDelete}
                  />
                );
              })}
            </ReservationList>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Reservation;
