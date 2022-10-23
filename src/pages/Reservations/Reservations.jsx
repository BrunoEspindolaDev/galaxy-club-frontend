import {
  Heading,
  Text,
  Flex,
  Box,
  VStack,
  ButtonGroup,
  Button,
  Spacer,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Reservations = () => {
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
          px={[8, 8, 8, 8, 0]}
          py={14}
        >
          <Flex direction="column" rowGap={14}>
            <Heading fontSize="2xl">Suas Reservas</Heading>
            <VStack align="stretch" spacing={[14, 14, 8, 8]}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Stack
                  key={i}
                  direction={["column", "column", "row"]}
                  align={["stretch", "stretch", "center"]}
                  justify="space-between"
                  transition="0.3s"
                  cursor="pointer"
                  spacing={4}
                >
                  <Stack
                    direction={["column", "column", "row"]}
                    align={["stretch", "stretch", "center"]}
                    spacing={5}
                  >
                    <Box
                      w={["100%", "100%", "90px"]}
                      h={["160px", "160px", "90px"]}
                      rounded="md"
                      backgroundImage="url(https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                      backgroundSize="cover"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                    />
                    <Box>
                      <Heading fontSize={["sm", "md"]} mb={2}>
                        Campo de Futebol
                      </Heading>
                      <Text fontSize={["xs", "sm"]} color="whiteAlpha.700">
                        10/09/2022 15:00 até 11/09/2022 ás 15:00
                      </Text>
                    </Box>
                  </Stack>
                  <ButtonGroup>
                    <Button size="sm" bg="white" color="gray.900">
                      Cancelar
                    </Button>
                    <Button size="sm">Detalhes</Button>
                  </ButtonGroup>
                </Stack>
              ))}
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Reservations;
