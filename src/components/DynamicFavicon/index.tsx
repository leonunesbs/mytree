import { useColorModeValue, useTheme } from "@chakra-ui/system";
import Head from "next/head";
import { useEffect, useState } from "react";

function DynamicFavicon() {
  const [colorMode, setColorMode] = useState("light");
  const theme = useTheme();
  const pwaThemeColor = useColorModeValue(
    theme.colors.white,
    theme.colors.brand[700]
  );
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  }, []);

  return (
    <Head>
      {/* START favicon + PWA */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon/${colorMode}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon/${colorMode}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="194x194"
        href={`/favicon/${colorMode}/favicon-194x194.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={`/favicon/${colorMode}/android-chrome-192x192.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon/${colorMode}/favicon-16x16.png`}
      />
      <link rel="manifest" href={`/favicon/${colorMode}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`/favicon/${colorMode}/safari-pinned-tab.svg`}
        color="#4a4d4d"
      />
      <link rel="shortcut icon" href={`/favicon/${colorMode}/favicon.ico`} />
      <meta name="apple-mobile-web-app-title" content="myTree" />
      <meta name="application-name" content="myTree" />
      <meta name="msapplication-TileColor" content={pwaThemeColor} />
      <meta
        name="msapplication-TileImage"
        content={`/favicon/${colorMode}/mstile-144x144.png`}
      />
      <meta
        name="msapplication-config"
        content={`/favicon/${colorMode}/browserconfig.xml`}
      />
      <meta name="theme-color" content={pwaThemeColor} />
      {/* END favicon + PWA */}
    </Head>
  );
}

export default DynamicFavicon;
