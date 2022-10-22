import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import {
  chakra,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Flex minH="100vh" direction="column" bg="#161618">
      <Flex as="header" h="65px" direction="column" bg="#1C1C1F" px={10}>
        <Flex
          flex={1}
          w="100%"
          maxW="1100px"
          alignSelf="center"
          align="center"
          justify="space-between"
        >
          <Flex align="center" columnGap={2}>
            <Icon as={Logo} w="24px" h="24px" />
            <Heading as="h5" fontSize="lg" color="white">
              GalaxyClub
            </Heading>
          </Flex>
          <Button onClick={() => navigate("/")}>Login</Button>
        </Flex>
      </Flex>
      <Flex flex={1} as="main" direction="column" align="center">
        <Flex
          mt="56px"
          as="section"
          alignSelf="center"
          direction="column"
          w="100%"
          maxW="700px"
          rounded="xl"
          rowGap={10}
          p={14}
        >
          <Flex direction="column" rowGap={2}>
            <Heading fontSize="2xl">Cadatrar-se</Heading>
            <Text color="whiteAlpha.700">Preencha os campos abaixo para fazer seu cadastro</Text>
          </Flex>
          <chakra.form display="flex" flexDirection="column" rowGap={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Telefone</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Senha</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Repita a senha</FormLabel>
              <Input variant="filled" />
            </FormControl>
            <Button colorScheme="purple" onClick={() => navigate("/home")} mt={8}>
              Concluir
            </Button>
          </chakra.form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
