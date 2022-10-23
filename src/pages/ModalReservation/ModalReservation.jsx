import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
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

const ModalReservaiton = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [guests, setGuests] = useState([]);

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

  return (
    <Modal size="xl" isOpen={true} onClose={() => null} onOverlayClick={handleGoBack}>
      <ModalOverlay />
      <ModalContent bg="#161618" py={3} m={3}>
        <ModalHeader>Efetuar Reserva</ModalHeader>
        <ModalBody as={Flex} direction="column" pt={8} rowGap={10}>
          <Stack direction={["column", "row"]} align={["stretch", "center"]} gap={2}>
            <FormControl>
              <FormLabel>Data Inicial</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Data Final</FormLabel>
              <Input />
            </FormControl>
          </Stack>
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
            <Button w="100%" colorScheme="purple" bg="#5644d3" color="white" onClick={handleGoBack}>
              Reservar
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalReservaiton;
