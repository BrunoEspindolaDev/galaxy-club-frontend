import {
  Heading,
  Text,
  Flex,
  Box,
  VStack,
  ButtonGroup,
  Button,
  Spacer,
  StackDivider,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Profile = () => {
  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Navbar />
      <Flex flex={1} as="main" direction="column" align="center">
        <Flex
          as="section"
          alignSelf="center"
          direction="column"
          w="100%"
          maxW="1100px"
          rounded="xl"
          rowGap={10}
          px={[8, 0]}
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
                    Fulano da Silva
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" transition="0.3s" columnGap={6} cursor="pointer">
                <Box>
                  <Heading fontSize="xs" textTransform="uppercase" mb={2}>
                    Telefone
                  </Heading>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    (47) 3357-8484
                  </Text>
                </Box>
              </Flex>
              <Flex align="center" transition="0.3s" columnGap={6} cursor="pointer">
                <Box>
                  <Heading fontSize="xs" textTransform="uppercase" mb={2}>
                    Email
                  </Heading>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    fulano@gmail.com
                  </Text>
                </Box>
              </Flex>
            </VStack>
            <ButtonGroup>
              <Button size="sm">Alterar Dados</Button>
              <Button size="sm">Alterar Senha</Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
