import React from "react";
import Link from "next/link";
import styled from "styled-components";

import StyledLink from "@/design-system/Link";
import Text from "@/design-system/Text";
import DefaultLayout from "@/layouts/default";

import CustomHead from "@/modules/head";
import { useCombination } from "@/modules/combination";

import { PageWithLayout } from "../pages";

const WhoAreYou = styled(Text)`
  position: fixed;
  top: 3%;
  left: 5%;
  text-align: left;
`;

const Email = styled(Text)`
  position: fixed;
  right: 5%;
  top: 3%;
  text-align: right;
`;

const SwitchShape = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -10px;
  width: 20px;
  height: 20px;
  background-color: #${(props) => props.color};
  transform: rotate(45deg);
`;

const Index: PageWithLayout = () => {
  const combination = useCombination();

  return (
    <>
      <CustomHead title="home" />
      <WhoAreYou>
        <Link as="/get-to-know-me" href="/get-to-know-me" passHref>
          <StyledLink title="get to know me">get to know me</StyledLink>
        </Link>
      </WhoAreYou>

      <Email>
        <StyledLink title="email me" href="mailto:hi@pep.pizza">
          email me
        </StyledLink>
      </Email>

      <StyledLink title="home" href="/">
        <SwitchShape color={combination.color2} />
      </StyledLink>
    </>
  );
};

Index.Layout = DefaultLayout;

export default Index;
