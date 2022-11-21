import { motion } from "framer-motion";
import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import ReservationItem from "./ReservationItem";

const MotionFlex = motion(Flex);

const ReservationList = ({ title, data, type }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      w="100%"
      rowGap={5}
      as="section"
      alignSelf="center"
      direction="column"
      p={isMobile ? 6 : 10}
    >
      {data && (
        <Flex direction="column" rowGap={8}>
          <Heading
            fontSize="sm"
            fontWeight="medium"
            textTransform="uppercase"
            display={isMobile ? "none" : "block"}
          >
            {title}
          </Heading>
          <Flex direction={["column", "row"]} align="flex-start" wrap="wrap" gap={[6, 6, 8]}>
            {data.map((item) => (
              <ReservationItem key={item.id} item={item} type={type} />
            ))}
          </Flex>
        </Flex>
      )}
    </MotionFlex>
  );
};

export default ReservationList;
