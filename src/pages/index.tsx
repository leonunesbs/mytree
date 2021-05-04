import {
  Flex,
  Heading,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  const bgMain = useColorModeValue("brand.700", "brand.800");
  const bgCard = useColorModeValue("brand.300", "brand.700");
  const logo = useColorModeValue("/logo.png", "/logo2.png");

  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bgColor={bgMain}
      px={[4, 60]}
    >
      <Flex
        flexDir="column"
        h="80%"
        minW={["150px", "450px"]}
        maxW="600px"
        flexGrow={1}
        p={10}
        boxShadow="dark-lg"
        bgColor={bgCard}
        borderRadius="2xl"
        align="center"
      >
        <Image
          src={logo}
          cursor="pointer"
          fit="contain"
          maxW="50%"
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
}
