import { Flex, Heading, Text, Box, useMediaQuery } from "@chakra-ui/react";

const ReservationItems = ({ title, data }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex as="section" alignSelf="center" direction="column" rowGap={5} p={isMobile ? 6 : 10}>
      {data && (
        <Flex direction="column" rowGap={8}>
          <Heading
            fontSize="sm"
            fontWeight="medium"
            textTransform="uppercase"
            display={isMobile ? "none" : "block"}
          >
            {title}
          </Heading>
          <Flex direction={["column", "row"]} align="center" wrap="wrap" gap={[6, 6, 6]}>
            {data.map(({ id, attributes }) => (
              <Flex
                key={id}
                w="100%"
                maxW={["100%", "100%", "326px", "326px"]}
                transition="0.3s"
                direction="column"
                bg="whiteAlpha.50"
                shadow="xl"
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
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default ReservationItems;
