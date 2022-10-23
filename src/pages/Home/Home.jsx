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
} from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Places = () => {
  const navigate = useNavigate();
  return (
    <Flex as="section" direction="column" rowGap={5}>
      <Heading fontSize="sm" display={["none", "block"]}>
        Áreas do Clube
      </Heading>
      <Stack direction={["column", "row"]} align="center" wrap="wrap" columnGap={7} rowGap={12}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Flex
            key={i}
            w="100%"
            flex={1}
            transition="0.3s"
            direction="column"
            rowGap={2}
            cursor="pointer"
            _hover={{ opacity: 0.5 }}
            onClick={() => navigate("reservation")}
          >
            <Box
              mb={2}
              h="240px"
              rounded="md"
              backgroundImage="url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
            <Heading fontSize="sm">Campo de Futebol</Heading>
            <Text fontSize="xs" color="whiteAlpha.700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

const Equipaments = () => {
  const navigate = useNavigate();
  return (
    <Flex as="section" direction="column" rowGap={5}>
      <Heading fontSize="sm" display={["none", "block"]}>
        Áreas do Clube
      </Heading>
      <Stack direction={["column", "row"]} align="center" wrap="wrap" columnGap={7} rowGap={12}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Flex
            key={i}
            w="100%"
            flex={1}
            transition="0.3s"
            direction="column"
            rowGap={2}
            cursor="pointer"
            _hover={{ opacity: 0.5 }}
            onClick={() => navigate("reservation")}
          >
            <Box
              mb={2}
              h="240px"
              rounded="md"
              backgroundImage="url(https://images.pexels.com/photos/901974/pexels-photo-901974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
            <Heading fontSize="sm">Telescópio</Heading>
            <Text fontSize="xs" color="whiteAlpha.700">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 563px)");

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
          pb={[5, 15]}
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
                  <Places />
                </TabPanel>
                <TabPanel px={0}>
                  <Equipaments />
                </TabPanel>
              </TabPanels>
            </Tabs>
          )}
          {!isMobile && (
            <>
              <Places />
              <Equipaments />
            </>
          )}
        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  );
};

export default Home;
