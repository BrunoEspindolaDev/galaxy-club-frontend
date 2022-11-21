import axios from "axios";
import api, { config } from "services/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import ReservationList from "components/ReservationList";
import Weather from "components/Weather";
import {
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useMediaQuery,
  useToast,
  Spinner,
} from "@chakra-ui/react";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [places, setPlaces] = useState(null);
  const [equipaments, setEquipaments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!places && !equipaments) {
      setIsLoading(true);

      axios
        .all([api.get("places?populate=*", config), api.get("equipaments?populate=*", config)])
        .then(
          axios.spread((placesRes, equipamentsRes) => {
            setPlaces(placesRes.data.data);
            setEquipaments(equipamentsRes.data.data);
          })
        )
        .catch(() => {
          toast({
            status: "error",
            description: "Comportamento inesperado, tente novamente mais tarde",
          });
        })
        .finally(() => setIsLoading(false));
    }
  }, [places, equipaments, toast]);

  const showData = !isLoading && equipaments && places;

  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Navbar />
      <Weather />
      <Flex flex={1} as="main" direction="column">
        <Flex
          as="section"
          w="100%"
          maxW="1200px"
          alignSelf="center"
          direction="column"
          rounded="xl"
          rowGap={0}
        >
          {isLoading && (
            <Flex direction="column" align="center" rowGap={4} py={10}>
              <Spinner />
              <Text as="h5" fontSize="sm">
                Carregando...
              </Text>
            </Flex>
          )}
          {showData && isMobile && (
            <Tabs
              display="flex"
              colorScheme="purple"
              flexDirection="column"
              variant="solid-rounded"
            >
              <TabList alignSelf="center" pt={12} pb={1}>
                <Tab
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  _selected={{ bg: "white", color: "gray.900" }}
                >
                  Equipamentos
                </Tab>
                <Tab
                  fontSize="xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  _selected={{ bg: "white", color: "gray.900" }}
                >
                  Áreas do Clube
                </Tab>
              </TabList>
              <TabPanels p={0}>
                <TabPanel p={0}>
                  <ReservationList type="equipament" title="Equipamentos" data={equipaments} />
                </TabPanel>
                <TabPanel p={0}>
                  <ReservationList type="place" title="Áreas do Clube" data={places} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
          {showData && !isMobile && (
            <>
              <ReservationList type="equipament" title="Equipamentos" data={equipaments} />
              <ReservationList type="place" title="Áreas do Clube" data={places} />
            </>
          )}
        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  );
};

export default Home;
