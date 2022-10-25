import { useNavigate } from "react-router-dom";
import spaceImage from "assets/images/space.jpg";
import { ReactComponent as Logo } from "assets/svg/logo.svg";
import { FiAtSign, FiKey } from "react-icons/fi";
import {
  chakra,
  Flex,
  Heading,
  Divider,
  Text,
  Icon,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Flex minH="100vh" justify="center" bg="#1C1C1F">
      <Flex
        flex={1}
        direction="column"
        backgroundImage={spaceImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        display={["none", "none", "none", "flex"]}
      >
        <Flex
          p={14}
          flex={1}
          direction="column"
          align="center"
          justify="center"
          rowGap={4}
          bg="blackAlpha.400"
        >
          <Flex align="center" columnGap={4}>
            <Icon as={Logo} w="86px" h="86px" />
            <Heading fontSize="72px" color="white">
              Galaxy Club
            </Heading>
          </Flex>
          <Divider maxW="600px" borderColor="whiteAlpha.400" />
          <Text fontSize="xl" textAlign="center" color="whiteAlpha.700">
            Os melhores espaços e equipamentos para locação.
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" w="450px" rowGap={4} pt="120px" px={10}>
        <Heading fontSize="2xl" color="white" textAlign={["center", "center", "start"]} mb={6}>
          Login
        </Heading>
        <chakra.form display="flex" flexDirection="column" rowGap={4}>
          <InputGroup variant="filled">
            <InputLeftElement>
              <Icon as={FiAtSign} w="18px" h="18px" color="white" />
            </InputLeftElement>
            <Input placeholder="Email" />
          </InputGroup>
          <InputGroup variant="filled">
            <InputLeftElement>
              <Icon as={FiKey} w="18px" h="18px" color="white" />
            </InputLeftElement>
            <Input placeholder="Senha" />
          </InputGroup>
          <Button colorScheme="purple" bg="#5644d3" color="white" mt={3} onClick={() => navigate("/home")}>
            Entrar
          </Button>
        </chakra.form>
      </Flex>
    </Flex>
  );
};

export default Login;
