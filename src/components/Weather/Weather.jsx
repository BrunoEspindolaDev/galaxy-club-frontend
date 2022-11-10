import axios from "axios";
import { useState, useEffect } from "react";
import { FiCircle } from "react-icons/fi";
import { Heading, Text, Flex, Icon } from "@chakra-ui/react";

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_TOKEN}&units=metric`
          )
          .then(({ data }) => setWeather({ ...data.main, ...data.coord }))
          .catch(() => null);
      },
      () => null
    );
  }, []);

  if (weather) {
    return (
      <Flex zIndex="dropdown" align="center" direction="column" bg="purple.500" py={2} px={5}>
        <Flex alignSelf="center" align="center" columnGap={3}>
          <Heading fontSize="sm" fontWeight="semibold">
            {weather.temp} °C
          </Heading>
          <Icon as={FiCircle} w="5px" h="5px" fill="white" />
          <Text fontSize="sm">Umidade: {weather.humidity}%</Text>
          <Icon as={FiCircle} w="5px" h="5px" fill="white" />
          <Text fontSize="sm">Vento: {weather.humidity} km/h</Text>
        </Flex>
      </Flex>
    );
  }

  return null;
};

export default Weather;
