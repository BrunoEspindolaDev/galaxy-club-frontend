import api from "services/api";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
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
import Navbar from "components/Navbar";
import ReservationItems from "components/ReservationItems";
import axios from "axios";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 563px)");

  const [places, setPlaces] = useState(null);
  const [equipaments, setEquipaments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!places && !equipaments) {
      setIsLoading(true);

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const handleError = () => {
        return toast({
          status: "error",
          description: "Comportamento inesperado, tente novamente mais tarde",
        });
      };

      axios
        .all([
          api.get("places?populate=*", axiosConfig),
          api.get("equipaments?populate=*", axiosConfig),
        ])
        .then(
          axios.spread((placesRes, equipamentsRes) => {
            setPlaces(placesRes.data.data);
            setEquipaments(equipamentsRes.data.data);
          })
        )
        .catch(handleError)
        .finally(() => setIsLoading(false));
    }
  }, [places, equipaments]);

  console.log("Places: ", places);

  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Navbar />
      <Flex flex={1} as="main" direction="column" align="center" p={[8, 0]}>
        <Flex
          as="section"
          alignSelf="center"
          direction="column"
          w="100%"
          maxW="1100px"
          rounded="xl"
          rowGap="82px"
          pt={[0, 14]}
          pb={[5, 14]}
        >
          {isMobile && (
            <Tabs colorScheme="purple">
              <TabList>
                <Tab fontSize="xs" fontWeight="bold" textTransform="uppercase">
                  Equipamentos
                </Tab>
                <Tab fontSize="xs" fontWeight="bold" textTransform="uppercase">
                  Áreas do Clube
                </Tab>
              </TabList>
              <TabPanels py={8} px={0}>
                <TabPanel px={0}>
                  <ReservationItems title="Equipamentos" data={equipaments} />
                  <ReservationItems title="Áreas do Clube" data={places} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
          {!isMobile && (
            <>
              <ReservationItems title="Equipamentos" data={equipaments} />
              <ReservationItems title="Áreas do Clube" data={places} />
            </>
          )}
          {isLoading && (
            <Flex direction="column" align="center" rowGap={4}>
              <Spinner />
              <Text as="h5" fontSize="sm">
                Carregando...
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  );
};

export default Home;
