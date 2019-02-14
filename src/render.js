import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';

import App from './App';

export default ({ page, combination, url, staticUrl }) => {
  const sheet = new ServerStyleSheet();

  const app = renderToStaticMarkup(
    sheet.collectStyles(<App combination={combination} Page={page} />)
  );

  return renderToStaticMarkup(
    <html>
      <head>
        <title>pep.🍕</title>
        <meta property="og:title" content="pepijn senders" />
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
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${staticUrl}/avatar.jpg`} />

        <link rel="icon" href={`${staticUrl}/favicon.ico?v=1`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="gwWNjYsldMfjT65nl1PCpoIXwtBTARH4k2oUZO0orzI"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Scope+One"
          rel="stylesheet"
        />

        {sheet.getStyleElement()}
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
            `
          }}
        />
      </head>
      <body
        style={{
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0
        }}
        dangerouslySetInnerHTML={{ __html: app }}
      />
    </html>
  );
};
