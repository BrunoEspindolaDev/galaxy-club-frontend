import axios from "axios";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Flex,
  Icon,
  Button,
  Stack,
  Heading,
  IconButton,
  FormControl,
  FormLabel,
  Text,
  VStack,
  Spacer,
  StackDivider,
} from "@chakra-ui/react";
import { useEffect } from "react";

const ModalReservaiton = () => {
  const [value, setValue] = useState("");
  const [guests, setGuests] = useState([]);
  const [disabledDateRanges, setDisableDateRanges] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const navigate = useNavigate();
  const toast = useToast();

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const handleGoBack = () => navigate(-1);

  const handleAddGuest = () => {
    if (!!value.length) {
      setGuests((prev) => [...prev, value]);
      setValue("");
    }
  };

  const handleRemoveGuest = (guest) => {
    setGuests((prev) => prev.filter((g) => g != guest));
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:1337/api/reservations",
        {
          data: {
            start_date: startDate,
            end_date: endDate,
            is_active: true,
          },
        },
        axiosConfig
      )
      .then((res) => console.log("res"))
      .catch(() => {
        toast({
          status: "error",
          description: "Comportamento inesperado. Por favor, tente novamente!",
          duration: 500,
        });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/reservations", axiosConfig)
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
  }, []);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Modal size="xl" isOpen={true} onClose={() => null} onOverlayClick={handleGoBack}>
      <ModalOverlay />
      <ModalContent bg="#161618" py={3} m={3}>
        <ModalHeader>Efetuar Reserva</ModalHeader>
        <ModalBody as={Flex} direction="column" pt={8} rowGap={10}>
          <FormControl>
            <FormLabel size="sm">Data da reserva</FormLabel>
            <DatePicker
              excludeDateIntervals={disabledDateRanges}
              selected={startDate}
              onChange={handleChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </FormControl>
          <Flex direction="column" rowGap={2} mb={10}>
            <Heading fontSize="sm">Visitantes</Heading>
            <Flex align="center" columnGap={2} mb={5}>
              <Input value={value} onChange={(e) => setValue(e.target.value)} />
              <IconButton
                disabled={!value.length}
                aria-label="add-guest"
                icon={<Icon as={FiPlus} />}
                colorScheme="purple"
                bg="#5644d3"
                color="white"
                onClick={handleAddGuest}
              />
            </Flex>
            {!!guests.length && (
              <VStack
                as="ul"
                align="stretch"
                divider={<StackDivider borderColor="whiteAlpha.50" />}
              >
                {guests.map((guest) => (
                  <Flex as="li" align="center" columnGap={2}>
                    <Text>{guest}</Text>
                    <Spacer />
                    <IconButton
                      size="sm"
                      aria-label="remove-guest"
                      icon={<Icon as={FiMinus} />}
                      onClick={() => handleRemoveGuest(guest)}
                    />
                  </Flex>
                ))}
              </VStack>
            )}
          </Flex>
          <Stack direction={["column", "row"]} alignSelf={["stretch", "flex-end"]}>
            <Button w="100%" onClick={handleGoBack}>
              Cancelar
            </Button>
            <Button w="100%" colorScheme="purple" bg="#5644d3" color="white" onClick={handleSubmit}>
              Reservar
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalReservaiton;
