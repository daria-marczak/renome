import React from 'react';
import styled from 'styled-components';

import Carousel from '../common/Carousel';

import { StyledHeading, StyledDescription } from '../common/common';

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
    <StyledHeading>lunch</StyledHeading>
    <StyledDescription>of the day</StyledDescription>
    <Carousel />
  </StyledSection>
);

export default Lunch;
