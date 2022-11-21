import { AnimatePresence, motion } from "framer-motion";
import { Flex, Heading, Text, Box, useDisclosure } from "@chakra-ui/react";
import ReservationItemCalendar from "./ReservationItemCalendar";

const MotionFlex = motion(Flex);

const ReservationItem = ({ item, type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      key={item.id}
      role="button"
      w="100%"
      h="450px"
      maxW={["100%", "100%", "326px", "326px"]}
      transition="0.3s"
      direction="column"
      bg="whiteAlpha.50"
      shadow="xl"
      rounded="2xl"
      cursor="pointer"
      overflow="hidden"
    >
      <AnimatePresence>
        {!isOpen && (
          <MotionFlex
            position="relative"
            initial={{ left: -200 }}
            animate={{ left: 0 }}
            direction="column"
            onClick={onOpen}
          >
            <Box
              h="300px"
              backgroundImage={item.attributes.image.data.attributes.url}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundColor="whiteAlpha.50"
            />
            <Flex direction="column" rowGap={3} p={5}>
              <Heading fontSize="sm" fontWeight="semibold">
                {item.attributes.name}
              </Heading>
              <Text fontSize={["xs", "sm"]} color="whiteAlpha.700" h="90px">
                {item.attributes.description}
              </Text>
            </Flex>
          </MotionFlex>
        )}
        {isOpen && <ReservationItemCalendar type={type} item={item} onCancel={onClose} />}
      </AnimatePresence>
    </Flex>
  );
};

export default ReservationItem;
