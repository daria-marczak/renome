import React from 'react';
import styled from 'styled-components';

import Carousel from '../common/Carousel';
import DesktopCarousel from '../common/DesktopCarousel';

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

  @media (min-width: 1200px) {
    height: 60vh;
  }
`;

const StyledLunchColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    align-self: center;
  }
`;

const Lunch = () => (
  <StyledSection>
    <StyledWrapper>
      <StyledLunchColumn>
        <StyledHeading>lunch</StyledHeading>
        <StyledDescription>of the day</StyledDescription>
      </StyledLunchColumn>
      <StyledColumn>
        <Carousel />
        <DesktopCarousel />
      </StyledColumn>
    </StyledWrapper>
  </StyledSection>
);

export default Lunch;
