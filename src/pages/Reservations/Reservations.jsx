import instance, { config } from "services/api";
import { useState, useEffect } from "react";
import Navbar from "components/Navbar";
import {
  Heading,
  Text,
  Flex,
  Box,
  VStack,
  Button,
  Stack,
  useToast,
  Spinner,
  StackDivider,
} from "@chakra-ui/react";

const Reservations = () => {
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
          `reservations?filters[users_permissions_user][id][$eq]=${loggedUser.id}&populate=equipament.image`,
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

  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Navbar />
      <Flex flex={1} as="main" direction="column" align="center">
        <Flex
          as="section"
          alignSelf="center"
          direction="column"
          w="100%"
          maxW="1100px"
          rounded="xl"
          rowGap={10}
          px={[8, 8, 8, 8, 0]}
          py={14}
        >
          {isLoadingFind && (
            <Flex direction="column" align="center" rowGap={4} py={10}>
              <Spinner />
              <Text as="h5" fontSize="sm">
                Carregando...
              </Text>
            </Flex>
          )}
          {reservations && (
            <Flex direction="column" rowGap={14}>
              <Heading fontSize="2xl">Suas Reservas</Heading>
              <VStack align="stretch" spacing={[14, 14, 8, 8]} divider={<StackDivider />}>
                {reservations.map((reservation) => {
                  const { id, attributes } = reservation;
                  const equipament = attributes.equipament.data.attributes;

                  return (
                    <Stack
                      key={id}
                      direction={["column", "column", "row"]}
                      align={["stretch", "stretch", "center"]}
                      justify="space-between"
                      transition="0.3s"
                      cursor="pointer"
                      spacing={4}
                    >
                      <Stack
                        direction={["column", "column", "row"]}
                        align={["stretch", "stretch", "center"]}
                        spacing={5}
                      >
                        <Box
                          w={["100%", "100%", "90px"]}
                          h={["160px", "160px", "90px"]}
                          rounded="50%"
                          backgroundImage={equipament.image.data.attributes.url}
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundRepeat="no-repeat"
                        />
                        <Box>
                          <Heading fontSize={["sm", "md"]} mb={2}>
                            {equipament.name}
                          </Heading>
                          <Text fontSize={["xs", "sm"]} color="whiteAlpha.700">
                            {attributes.start_date} até {attributes.end_date}
                          </Text>
                        </Box>
                      </Stack>
                      <Button
                        size="sm"
                        bg="white"
                        color="gray.900"
                        isLoading={isLoadingDelete}
                        onClick={() => handleDelete(id)}
                      >
                        Cancelar
                      </Button>
                    </Stack>
                  );
                })}
              </VStack>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Reservations;
