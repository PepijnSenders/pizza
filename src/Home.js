import React, { Fragment } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Text from './Text';
import Link from './Link';

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
  background-color: #${props => props.color};
  transform: rotate(45deg);
`;

export default ({ nextCombination, currentCombination }) => (
  <Fragment>
    <WhoAreYou>
      <Link href="/get-to-know-me" title="get to know me">
        get to know me
      </Link>
    </WhoAreYou>

    <Email>
      <Link title="email me" href="mailto:hi@pep.pizza">
        email me
      </Link>
    </Email>

    <Link title="change color" href={`?combination=${nextCombination}`}>
      <SwitchShape color={currentCombination[1]} />
    </Link>

    <Footer currentCombination={currentCombination} />
  </Fragment>
);
