import { Heading, Text, Box, Button, Stack } from "@chakra-ui/react";

const ReservationItem = ({ id, name, image, endData, startDate, isLoading, onDelete }) => {
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
          backgroundImage={image}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        />
        <Box>
          <Heading fontSize={["sm", "md"]} mb={2}>
            {name}
          </Heading>
          <Text fontSize={["xs", "sm"]} color="whiteAlpha.700">
            {startDate} até {endData}
          </Text>
        </Box>
      </Stack>
      <Button
        size="sm"
        bg="white"
        color="gray.900"
        disabled={isLoading}
        onClick={() => onDelete(id)}
      >
        Cancelar
      </Button>
    </Stack>
  );
};

export default ReservationItem;
