import React from 'react';
import styled from 'styled-components';

import Carousel from '../common/Carousel';

import { StyledHeading, StyledDescription } from '../../assets/styles/common';

const StyledSection = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.lightGray};
  position: absolute;
  width: 100%;
  left: 0;
`;

const Lunch = () => (
  <StyledSection>
    <StyledHeading>lunch</StyledHeading>
    <StyledDescription>of the day</StyledDescription>
    <Carousel />
  </StyledSection>
);

export default Lunch;
