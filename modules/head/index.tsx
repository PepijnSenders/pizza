import React from "react";
import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>pep.🍕 — {title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="profile" />
      <meta property="og:locale" content="en_GB" />
      <meta name="keywords" content="software,music,pep" />
      <meta
        name="description"
        content="pep's personal website, software engineer and music addict"
      />
      <meta
        property="og:description"
        content="pep's personal website, software engineer and music addict"
      />
      <meta property="profile:first_name" content="pepijn" />
      <meta property="profile:last_name" content="senders" />
      <meta property="profile:username" content="pep" />
      <meta property="profile:gender" content="male" />
      <meta property="og:image" content="/avatar.jpg" />

      <link rel="icon" href="/favicon.ico?v=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="google-site-verification"
        content="gwWNjYsldMfjT65nl1PCpoIXwtBTARH4k2oUZO0orzI"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Scope+One"
        rel="stylesheet"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-127656409-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-127656409-1');
            `,
        }}
      />
    </Head>
  );
};

export default CustomHead;
