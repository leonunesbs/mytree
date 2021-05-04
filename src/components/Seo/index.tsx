import Head from "next/head";
import { useState } from "react";

interface SeoProps {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
}

const Seo = ({ metaTitle, metaDescription, shareImage }: SeoProps) => {
  const defaultMetaTitle = "myTree";
  const defaultMetaDescription = "myTree";
  const defaultShareImage = "";

  return (
    <Head>
      <>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle || defaultMetaTitle} />
        <meta name="twitter:title" content={metaTitle} />
      </>
      <>
        <meta
          name="description"
          content={metaDescription || defaultMetaDescription}
        />
        <meta
          property="og:description"
          content={metaDescription || defaultMetaDescription}
        />
        <meta
          name="twitter:description"
          content={metaDescription || defaultMetaDescription}
        />
      </>
      <>
        <meta property="og:image" content={shareImage || defaultShareImage} />
        <meta name="twitter:image" content={shareImage || defaultShareImage} />
        <meta name="image" content={shareImage || defaultShareImage} />
      </>
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;
