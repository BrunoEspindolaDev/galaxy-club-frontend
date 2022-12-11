import { Heading, Text, Box, Button, Stack } from "@chakra-ui/react";

const formatDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("pt-br", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};

const ReservationItem = ({ id, name, image, endDate, startDate, isLoading, onDelete }) => {
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

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
            De {formattedStartDate} até {formattedEndDate}
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
