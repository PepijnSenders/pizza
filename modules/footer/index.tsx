import React from "react";
import styled from "styled-components";

import Text from "@/design-system/Text";
import StyledLink from "@/design-system/Link";
import { useCombination } from "@/modules/combination";

const InspiredBy = styled(Text)`
  position: fixed;
  width: 100%;
  bottom: 3%;
  text-align: center;
`;

const InnerInspiredBy = styled.div`
  margin: 0 20px;
`;

const Footer: React.FC = () => {
  const combination = useCombination();

  return (
    <InspiredBy>
      <InnerInspiredBy>
        {"colors inspired by "}
        <StyledLink
          target="_blank"
          href={combination.url}
          title={combination.name}
        >
          {combination.name}
        </StyledLink>
      </InnerInspiredBy>
    </InspiredBy>
  );
};

export default Footer;
