import React from 'react';
import styled from 'styled-components';

import Carousel from '../common/Carousel';

import {
  StyledHeading,
  StyledDescription,
  StyledWrapper,
  StyledColumn,
} from '../common/common';

const StyledSection = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.lightGray};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Lunch = () => (
  <StyledSection>
    <StyledWrapper>
      <StyledColumn>
        <StyledHeading>lunch</StyledHeading>
        <StyledDescription>of the day</StyledDescription>
      </StyledColumn>
      <StyledColumn>
        <Carousel />
      </StyledColumn>
    </StyledWrapper>
  </StyledSection>
);

export default Lunch;
