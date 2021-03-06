import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import themeDefault from "@/styles/themeDefault";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../utils/gtag";

import "@fontsource/balsamiq-sans";
import "@fontsource/oswald";

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
      <ChakraProvider theme={themeDefault}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
