import { Heading, Text, Flex, Box, Icon } from "@chakra-ui/react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherDetails = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      rowGap={1}
      bg="purple.400"
      rounded="lg"
      p={7}
    >
      <Flex align="center" columnGap={4}>
        <Heading fontSize="6xl">22º</Heading>
        <Box>
          <Icon as={TiWeatherPartlySunny} w="24px" h="24px" />
          <Flex align="center">
            <Flex>
              <Icon as={FaMapMarkerAlt} mr={2} />
              <Text fontSize="sm" color="whiteAlpha.700">
                Rio do Sul - SC
              </Text>
            </Flex>
            <Text fontSize="sm" color="whiteAlpha.700">
              Parcialmente Nublado
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WeatherDetails;
