import Seo from "@/components/Seo";
import {
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
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
        px={[4, 60]}
        py={4}
      >
        <Flex
          flexDir="column"
          h="100%"
          minW={["150px", "450px"]}
          maxW="600px"
          flexGrow={1}
          p={10}
          boxShadow="dark-lg"
          bgGradient={cardBgColor}
          borderRadius="2xl"
          align="center"
          // Temporary justify center
          justify="center"
        >
          <Image
            src={logo}
            cursor="pointer"
            fit="contain"
            maxW="35%"
            minW="120px"
            onClick={toggleColorMode}
          />
          <Flex flexDir="column" align="center">
            <Flex h="px" my={2} w="95%" bgColor="brand.200" />
            <Stack isInline spacing={4} justify="center">
              {socials.map((social) => {
                return (
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
                );
              })}
            </Stack>
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
