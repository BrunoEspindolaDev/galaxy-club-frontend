import { Text, Flex, Spinner } from "@chakra-ui/react";

const ReservationLoading = () => {
  return (
    <Flex direction="column" align="center" rowGap={4} py={10}>
      <Spinner />
      <Text as="h5" fontSize="sm">
        Carregando...
      </Text>
    </Flex>
  );
};

export default ReservationLoading;
