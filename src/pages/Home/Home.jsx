import { Outlet, useNavigate } from "react-router-dom";
import {
  Heading,
  Text,
  Flex,
  Box,
  Stack,
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
import { useEffect, useState } from "react";
import axios from "axios";

const Items = ({ title, items }) => {
  const navigate = useNavigate();
  return (
    <Flex as="section" direction="column" rowGap={5}>
      {items && (
        <Flex direction="column" rowGap={8}>
          <Heading fontSize="sm" display={["none", "block"]}>
            {title}
          </Heading>
          <Stack direction={["column", "row"]} align="center" wrap="wrap" columnGap={7} rowGap={12}>
            {items.map(({ id, attributes }) => (
              <Flex
                key={id}
                w="100%"
                maxW="326px"
                transition="0.3s"
                direction="column"
                rowGap={2}
                cursor="pointer"
                _hover={{ opacity: 0.5 }}
                onClick={() => navigate("reservation")}
              >
                <Box
                  mb={2}
                  h="260px"
                  rounded="md"
                  backgroundImage={`url(https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png)`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                />
                <Heading fontSize="sm">{attributes.name}</Heading>
                <Text fontSize="xs" color="whiteAlpha.700">
                  {attributes.description}
                </Text>
              </Flex>
            ))}
          </Stack>
        </Flex>
      )}
    </Flex>
  );
};

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 563px)");

  const [places, setPlaces] = useState(null);
  const [equipaments, setEquipaments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (!places && !equipaments) {
      setIsLoading(true);

      const handleError = () => {
        return toast({
          status: "error",
          description: "Comportamento inesperado, tente novamente mais tarde",
        });
      };

      axios
        .all([
          axios.get("http://localhost:1337/api/places"),
          axios.get("http://localhost:1337/api/equipaments"),
        ])
        .then(
          axios.spread((placesRes, equipamentsRes) => {
            console.log("Res: ", placesRes);
            setPlaces(placesRes.data.data);
            setEquipaments(equipamentsRes.data.data);
          })
        )
        .catch(handleError)
        .finally(() => setIsLoading(false));
    }
  }, [places, equipaments]);

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
                  Áreas do Clube
                </Tab>
                <Tab fontSize="xs" fontWeight="bold" textTransform="uppercase">
                  Equipamentos
                </Tab>
              </TabList>
              <TabPanels py={8} px={0}>
                <TabPanel px={0}>
                  <Items title="Áreas do Clube" items={places} />
                  <Items title="Equipamentos" items={equipaments} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
          {!isMobile && (
            <>
              <Items title="Áreas do Clube" items={places} />
              <Items title="Equipamentos" items={equipaments} />
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
