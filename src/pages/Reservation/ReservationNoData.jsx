import { ReactComponent as IllustrationNoData } from "assets/svg/noData.svg";
import { Heading, Flex, Button, Center, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ReservationNoData = () => {
  const navigate = useNavigate();
  const handleNavigateToHome = () => navigate("/home");

  return (
    <Center flex={1}>
      <Flex direction="column" align="center" rowGap={10}>
        <Icon as={IllustrationNoData} w="250px" h="250px" />
        <Flex direction="column" align="center" rowGap={5}>
          <Heading fontSize="lg" fontWeight="medium" textAlign="center">
            Você ainda não realizou nenhuma reserva.
          </Heading>
          <Button onClick={handleNavigateToHome}>Reservar</Button>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ReservationNoData;
