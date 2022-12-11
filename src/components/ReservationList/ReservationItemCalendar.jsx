import instance, { config } from "services/api";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import DatePicker from "react-datepicker";
import {
  Flex,
  Heading,
  Button,
  useToast,
  Icon,
  IconButton,
  useOutsideClick,
} from "@chakra-ui/react";
import { useRef } from "react";
import moment, { isAfter } from "moment";
import useSubscription from "hooks/useSubscription";

const MotionFlex = motion(Flex);

const ReservationItemCalendar = ({ item, type, onCancel }) => {
  const [disabledDateRanges, setDisableDateRanges] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const calendarContainerRef = useRef();
  const navigate = useNavigate();
  const toast = useToast();

  const { subscriptionEnd } = useSubscription();

  useOutsideClick({ ref: calendarContainerRef, handler: () => !isLoading && onCancel() });

  const handleSubmit = () => {
    const storagedUser = JSON.parse(localStorage.getItem("user"));
    if (moment(endDate).isAfter(subscriptionEnd)) {
      return toast({
        status: "error",
        description:
          "A data final da reserva deve estar dentro do périodo válido da sua matrícula.",
        duration: 4000,
      });
    }

    setIsLoading(true);
    const body = {
      data: {
        users_permissions_user: storagedUser.id,
        start_date: startDate,
        end_date: endDate,
        is_active: true,
        guests: "",
      },
    };

    if (type === "equipment") {
      body.data.equipament = item.id;
    } else {
      body.data.place = item.id;
    }

    instance
      .post("reservations", body, config)
      .then(() => navigate("/reservations"))
      .catch(() => {
        toast({
          status: "error",
          description: "Comportamento inesperado. Por favor, tente novamente!",
          duration: 500,
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (item) {
      const url =
        type === "equipament"
          ? `reservations?filters[equipament][id][$eq]=${item.id}`
          : `reservations?filters[place][id][$eq]=${item.id}`;

      instance
        .get(url, config)
        .then(({ data }) => {
          console.log("reservations: ", data.data);

          const reservations = data.data;

          const intervals = reservations.map((reservation) => ({
            start: reservation.attributes.start_date,
            end: reservation.attributes.end_date,
          }));

          const disabled = intervals.map((range) => ({
            start: new Date(range.start),
            end: new Date(range.end),
          }));

          setDisableDateRanges(disabled);
        })
        .catch(() => {
          toast({
            status: "error",
            description: "Comportamento inesperado. Por favor, tente novamente!",
            duration: 500,
          });
        });
    }
  }, [item]);

  const handleChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <MotionFlex
      ref={calendarContainerRef}
      position="relative"
      initial={{ left: -200 }}
      animate={{ left: 0 }}
      direction="column"
      p={5}
    >
      <IconButton
        aria-label="goBack"
        alignSelf="flex-start"
        icon={<Icon as={FiChevronLeft} w="20px" h="20px" />}
        onClick={onCancel}
      />
      <Heading fontSize="lg" fontWeight="semibold" textAlign="center" mt={1} mb={4}>
        Efetuar Reserva
      </Heading>
      <DatePicker
        inline
        dateFormat="L"
        excludeDateIntervals={disabledDateRanges}
        minDate={new Date()}
        selected={null}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        style={{
          backgroundColor: "#161618",
        }}
      />
      <Button
        mt={2}
        isLoading={isLoading}
        colorScheme="purple"
        bg="#5644d3"
        color="white"
        onClick={handleSubmit}
      >
        Reservar
      </Button>
    </MotionFlex>
  );
};

export default ReservationItemCalendar;
