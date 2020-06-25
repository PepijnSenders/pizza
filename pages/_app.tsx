import React from "react";
import { AppProps } from "next/app";

import { PageWithLayout } from "../pages";
import CombinationsProvider from "@/modules/combination";

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as PageWithLayout).Layout;

  return (
    <CombinationsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CombinationsProvider>
  );
};

export default CustomApp;
