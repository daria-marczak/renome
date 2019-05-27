import React from 'react';
import styled from 'styled-components';

import Carousel from '../common/Carousel';
import DesktopCarousel from '../common/DesktopCarousel';

import {
  StyledHeading,
  StyledDescription,
  StyledWrapper,
  StyledColumn,
  StyledColumnCentered,
} from '../common/common';

const StyledSection = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.lightGray};
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 34vh;
  }

  @media (min-width: 1281px) {
    height: 60vh;
  }
`;

const StyledCarouselColumn = styled(StyledColumn)`
  @media (min-width: 768px) and (max-width: 1280px) {
    margin-top: 20px;
  }

  @media (min-width: 1281px) {
    margin-top: 40px;
  }
`;

const Lunch = () => (
  <StyledSection>
    <StyledWrapper>
      <StyledColumnCentered>
        <StyledHeading>lunch</StyledHeading>
        <StyledDescription>of the day</StyledDescription>
      </StyledColumnCentered>
      <StyledCarouselColumn>
        <Carousel />
        <DesktopCarousel />
      </StyledCarouselColumn>
    </StyledWrapper>
  </StyledSection>
);

export default Lunch;
