import React, { Fragment } from 'react';
import styled from 'styled-components';

import Text from './Text';
import Link from './Link';

const InspiredBy = styled(Text)`
  position: fixed;
  width: 100%;
  bottom: 3%;
  text-align: center;
`;

const InnerInspiredBy = styled.div`
  margin: 0 20px;
`;

export default ({ currentCombination }) => (
  <InspiredBy>
    <InnerInspiredBy>
      colors inspired by{' '}
      <Link
        target="_blank"
        title={currentCombination[3]}
        href={currentCombination[2]}
      >
        {currentCombination[3]}
      </Link>
    </InnerInspiredBy>
  </InspiredBy>
);
