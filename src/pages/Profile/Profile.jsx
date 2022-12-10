import { useEffect, useState } from "react";
import { Heading, Text, Flex, Box, VStack, StackDivider } from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
    }
  }, []);

  if (user) {
    return (
      <Flex minH="100vh" direction="column" bg="#161618">
        <Navbar />
        <Flex flex={1} as="main" direction="column" align="center">
          <Flex
            as="section"
            alignSelf="center"
            direction="column"
            w="100%"
            maxW="999px"
            rounded="xl"
            rowGap={10}
            px={[8, 10]}
            py={14}
          >
            <Flex direction="column" rowGap={14}>
              <Heading fontSize="2xl">Seu Perfil</Heading>
              <VStack
                align="stretch"
                spacing={5}
                divider={<StackDivider borderColor="whiteAlpha.100" />}
              >
                <Flex align="center" transition="0.3s" columnGap={6} cursor="pointer">
                  <Box>
                    <Heading fontSize="xs" textTransform="uppercase" mb={2}>
                      Nome Completo
                    </Heading>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      {user?.username}
                    </Text>
                  </Box>
                </Flex>
                <Flex align="center" transition="0.3s" columnGap={6} cursor="pointer">
                  <Box>
                    <Heading fontSize="xs" textTransform="uppercase" mb={2}>
                      Telefone
                    </Heading>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      {user?.phone}
                    </Text>
                  </Box>
                </Flex>
                <Flex align="center" transition="0.3s" columnGap={6} cursor="pointer">
                  <Box>
                    <Heading fontSize="xs" textTransform="uppercase" mb={2}>
                      Email
                    </Heading>
                    <Text fontSize="sm" color="whiteAlpha.700">
                      {user?.email}
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return null;
};

export default Profile;
