import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import themeDefault from "@/styles/themeDefault";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);
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
