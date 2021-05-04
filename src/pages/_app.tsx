import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import themeDefault from "@/styles/themeDefault";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-33VJP2LVSZ"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-33VJP2LVSZ');
        </script>
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
