import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import themeDefault from "@/styles/themeDefault";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;400;700&family=Oswald:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={themeDefault}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
