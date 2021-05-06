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
  useOutsideClick,
  LinkBox,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useTheme,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React, { useRef } from "react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineQrcode,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTwitch } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "react-icons";
import DynamicFavicon from "@/components/DynamicFavicon";
import Head from "next/head";
import QRCode from "qrcode.react";

interface HomeProps {
  socials: {
    id: number;
    name: string;
    url: string;
    icon: IconType;
  }[];
}

const Card = ({ title, image, link, cardBgColor, mainBgColor }: any) => {
  const theme = useTheme();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const cardRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: cardRef,
    handler: () => onClose(),
  });

  return (
    <Flex
      ref={cardRef}
      bgColor="brand.200"
      color="brand.700"
      minH="65px"
      w="100%"
      borderRadius="md"
      align="center"
      justify="center"
      onClick={onToggle}
      flexDir="column"
      boxShadow="md"
      p={4}
    >
      {image && (
        <>
          <Img src={image} boxSize="100px" objectFit="contain" />
        </>
      )}

      <Collapse in={isOpen} animateOpacity>
        <SlideFade in={isOpen} offsetY="-2000px">
          <Stack
            flexDir="column"
            minH="155px"
            align="center"
            justify="center"
            p={10}
            w="100%"
          >
            <Flex flexDir="column" w="100%" align="center">
              <Heading as="h2" fontSize="xl">
                {title}
              </Heading>
              <Flex h="px" my={2} w="100%" bgColor="brand.700" />

              <Wrap spacing={4} justify="center">
                <WrapItem>
                  <Link href={link} isExternal>
                    <Icon as={FiExternalLink} h={10} w={10} />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link href={link} isExternal></Link>
                  <Popover>
                    <PopoverTrigger>
                      <Button _focus={{}} p={0}>
                        <Icon as={AiOutlineQrcode} h={10} w={10} />
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent
                        display="flex"
                        _focus={{}}
                        w={200}
                        bgColor="brand.700"
                        boxShadow="lg"
                      >
                        <PopoverArrow bgColor="brand.300" />
                        <PopoverBody display="flex" justifyContent="center">
                          <QRCode
                            size={200}
                            value={link}
                            renderAs="svg"
                            bgColor="transparent"
                            fgColor={theme.colors.brand[300]}
                          />
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </WrapItem>
              </Wrap>
            </Flex>
          </Stack>
        </SlideFade>
      </Collapse>
    </Flex>
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
          <Heading as="h1" textAlign="center" bgHeading={mainBgColor}>
            @leonunesbs
          </Heading>
          <Stack flexGrow={1} justify="center" w="100%">
            <Card
              title="Meu blog"
              image="/leonunesbsBlog-logo.png"
              link="https://blog.leonunesbs.com.br"
              cardBgColor={cardBgColor}
              mainBgColor={mainBgColor}
            />
            <Card
              title="Portfólio"
              image="/portfolio.png"
              link="https://portfolio.leonunesbs.com.br"
              cardBgColor={cardBgColor}
              mainBgColor={mainBgColor}
            />
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
                    <WrapItem key={social.id}>
                      <Tooltip
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
