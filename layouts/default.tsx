import React from "react";
import styled from "styled-components";
import { complement } from "polished";

import Footer from "@/modules/footer";
import { useCombination } from "@/modules/combination";

interface ContainerProps {
  readonly backgroundColor: string;
  readonly color: string;
}

const Container = styled.section<ContainerProps>`
  background-color: #${(props) => props.backgroundColor};
  color: #${(props) => props.color};
  height: 100%;
  width: 100%;
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 0;

  font-family: "Scope One", serif;

  * {
    &::selection {
      background-color: ${(props) => complement(`#${props.backgroundColor}`)};
    }
  }
`;

const DefaultLayout: React.FC = ({ children }) => {
  const combination = useCombination();

  return (
    <Container color={combination.color2} backgroundColor={combination.color1}>
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
