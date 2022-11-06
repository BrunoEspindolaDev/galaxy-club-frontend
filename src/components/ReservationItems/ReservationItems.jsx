import { Flex, Heading, Text, Stack, Box } from "@chakra-ui/react";

const ReservationItems = ({ title, data }) => {
  return (
    <Flex as="section" direction="column" rowGap={5}>
      {data && (
        <Flex direction="column" rowGap={8}>
          <Heading
            fontSize="sm"
            fontWeight="medium"
            textTransform="uppercase"
            display={["none", "block"]}
          >
            {title}
          </Heading>
          <Stack direction={["column", "row"]} align="center" wrap="wrap" columnGap={7} rowGap={12}>
            {data.map(({ id, attributes }) => (
              <Flex
                key={id}
                w="100%"
                maxW="326px"
                transition="0.3s"
                direction="column"
                bg="whiteAlpha.50"
                rounded="2xl"
                cursor="pointer"
                overflow="hidden"
                _hover={{ opacity: 0.5 }}
              >
                <Box
                  h="300px"
                  backgroundImage={attributes.image.data.attributes.url}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundColor="whiteAlpha.50"
                />
                <Flex direction="column" rowGap={3} p={5}>
                  <Heading fontSize="sm" fontWeight="semibold">
                    {attributes.name}
                  </Heading>
                  <Text fontSize={["xs", "sm"]} color="whiteAlpha.700" h="90px">
                    {attributes.description}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Stack>
        </Flex>
      )}
    </Flex>
  );
};

export default ReservationItems;
