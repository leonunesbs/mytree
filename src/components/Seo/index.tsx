import Head from "next/head";
import { useEffect, useState } from "react";

interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
}

const Seo = ({
  metaTitle: initialMetaTitle,
  metaDescription: initialMetaDescription,
  shareImage: initialshareImage,
}: SeoProps) => {
  const [siteName, setSiteName] = useState("myTree");

  const [metaTitle, setMetaTitle] = useState(siteName);
  const [metaDescription, setMetaDescription] = useState(
    initialMetaDescription || ""
  );
  const [shareImage, setShareImage] = useState(initialMetaDescription || "");

  useEffect(() => {
    if (initialMetaTitle) {
      setMetaTitle(`${initialMetaTitle} | ${siteName}`);
    }
  }, []);

  return (
    <Head>
      <>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        <meta name="twitter:title" content={metaTitle} />
      </>
      <>
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
      </>
      <>
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:image" content={shareImage} />
        <meta name="image" content={shareImage} />
      </>
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
