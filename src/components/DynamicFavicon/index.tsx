import Head from "next/head";
import { useEffect, useState } from "react";

function DynamicFavicon() {
  const [colorMode, setColorMode] = useState("light");
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
        sizes="57x57"
        href={`/favicon/${colorMode}/apple-touch-icon-57x57.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`"/favicon/${colorMode}/apple-touch-icon-60x60.png"`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`"/favicon/${colorMode}/apple-touch-icon-72x72.png"`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`"/favicon/${colorMode}/apple-touch-icon-76x76.png"`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`/favicon/${colorMode}/apple-touch-icon-114x114.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`/favicon/${colorMode}/apple-touch-icon-120x120.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`/favicon/${colorMode}/apple-touch-icon-144x144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`/favicon/${colorMode}/apple-touch-icon-152x152.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon/${colorMode}/apple-touch-icon-180x180.png`}
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
        color="#1a202c"
      />
      <link rel="shortcut icon" href={`/favicon/${colorMode}/favicon.ico`} />
      <meta name="apple-mobile-web-app-title" content="leonunesbsBlog" />
      <meta name="application-name" content="leonunesbsBlog" />
      <meta name="msapplication-TileColor" content="#1a202c" />
      <meta
        name="msapplication-TileImage"
        content={`"/favicon/${colorMode}/mstile-144x144.png"`}
      />
      <meta
        name="msapplication-config"
        content={`"/favicon/${colorMode}/browserconfig.xml"`}
      />
      <meta name="theme-color" content="#1a202c" />
      {/* END favicon + PWA */}
    </Head>
  );
}

export default DynamicFavicon;
