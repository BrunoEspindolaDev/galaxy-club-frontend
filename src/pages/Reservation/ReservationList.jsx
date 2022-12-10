import { Heading, Flex, VStack, StackDivider } from "@chakra-ui/react";

const ReservationList = ({ children }) => {
  return (
    <Flex direction="column" rowGap={14}>
      <Heading fontSize="2xl">Suas Reservas</Heading>
      <VStack align="stretch" spacing={[14, 14, 8, 8]} divider={<StackDivider />}>
        {children}
      </VStack>
    </Flex>
  );
};

export default ReservationList;
