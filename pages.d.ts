import React from "react";
import { NextComponentType, NextPage, NextPageContext } from "next";

export type PageWithLayout<P = {}, IP = {}> = NextPage<P, IP> & {
  Layout: React.FunctionComponent<any>;
};
