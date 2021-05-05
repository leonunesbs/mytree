import Seo from "@/components/Seo";
import {
  AspectRatio,
  Flex,
  Heading,
  Text,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
  useDisclosure,
  Collapse,
  Img,
  SlideFade,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";
import { IconType } from "react-icons";
import DynamicFavicon from "@/components/DynamicFavicon";

interface HomeProps {
  socials: {
    id: number;
    name: string;
    url: string;
    icon: IconType;
  }[];
}

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        bgColor="brand.200"
        color="brand.700"
        minH="75px"
        w="100%"
        borderRadius="md"
        align="center"
        justify="center"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        flexDir="column"
        boxShadow="md"
      >
        <SlideFade in={!isOpen} offsetY="20px">
          <Heading as="h2" size="md" display={isOpen ? "none" : "initial"}>
            leonunesbsBlog
          </Heading>
        </SlideFade>
        <Collapse in={isOpen} animateOpacity>
          <SlideFade in={isOpen} offsetY="-2000px">
            <Flex flexDir="column" minH="155px" align="center" p={10}>
              <Img src="/leonunesbsBlog-logo.png" boxSize="150px" />
              <Wrap>
                <WrapItem>
                  <Icon />
                  <Icon />
                  <Icon />
                  <Icon />
                  <Icon />
                  <Icon />
                </WrapItem>
              </Wrap>
            </Flex>
          </SlideFade>
        </Collapse>
      </Flex>
    </>
  );
};

export default function Home({ socials: initialSocials }: HomeProps) {
  const mainBgColor = useColorModeValue(
    "linear(to-br, brand.700, brand.900)",
    "linear(to-br, brand.300, brand.500)"
  );

  const cardBgColor = useColorModeValue(
    "linear(to-b, brand.300, brand.400)",
    "linear(to-b, brand.700, brand.800)"
  );
  const toolTipBgColor = useColorModeValue("brand.200", "brand.400");
  const toolTipTextColor = useColorModeValue("brand.700", "brand.200");
  const logo = useColorModeValue("/logo-light.png", "/logo-dark.png");
  const socialIconsColor = useColorModeValue("brand.700", "brand.200");
  const socialBgColor = useColorModeValue("brand.200", "brand.300");

  const { toggleColorMode } = useColorMode();

  const icons: any = {
    facebook: AiFillFacebook,
    instagram: AiFillInstagram,
    twitter: AiFillTwitterSquare,
    github: AiFillGithub,
    linkedin: AiFillLinkedin,
    whatsapp: AiOutlineWhatsApp,
    twitch: FaTwitch,
  };

  const socials = initialSocials.map((social) => ({
    ...social,
    icon: icons[social.name],
  }));

  return (
    <>
      <Seo metaTitle="leonunesbs" />
      <DynamicFavicon />
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        bgGradient={mainBgColor}
        p={2}
      >
        <Flex
          flexDir="column"
          h="100%"
          maxW="500px"
          flexGrow={1}
          boxShadow="dark-lg"
          bgGradient={cardBgColor}
          borderRadius="2xl"
          align="center"
          justify="space-between"
          px={[2, 4]}
          py={4}
        >
          <Stack flexGrow={1} justify="center" w="100%">
            <Card />
            <Card />
            <Card />
            <Card />
          </Stack>
          <Flex flexDir="column" align="center">
            <Image
              src={logo}
              alt="logo"
              cursor="pointer"
              fit="contain"
              maxW="35%"
              minW="100px"
              onClick={toggleColorMode}
            />
            <Flex flexDir="column" align="center">
              <Flex h="px" my={2} w="95%" bgColor="brand.200" />
              <Wrap spacing={4} justify="center">
                {socials.map((social) => {
                  return (
                    <WrapItem>
                      <Tooltip
                        key={social.id}
                        hasArrow
                        fontWeight="bold"
                        label={social.name}
                        bg={toolTipBgColor}
                        color={toolTipTextColor}
                      >
                        <Link
                          isExternal
                          href={social.url}
                          p={1}
                          color={socialIconsColor}
                          _hover={{ color: socialBgColor }}
                        >
                          <Icon id={social.name} as={social.icon} w={8} h={8} />
                        </Link>
                      </Tooltip>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticProps) {
  const res = await fetch(`https://leonunesbs.herokuapp.com/homepage`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const { socials } = data;

  return {
    props: { socials },
    revalidate: 1,
  };
}
