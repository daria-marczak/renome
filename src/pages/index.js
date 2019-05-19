import React from 'react';
import styled from 'styled-components';

import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/home/Header';
import About from '../components/home/About';
import LunchOfDay from '../components/home/LunchOfDay';
import MenuSection from '../components/home/Menu';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const IndexPage = () => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <StyledWrapper>
      <About />
    </StyledWrapper>
    <LunchOfDay />
    <StyledWrapper>
      <MenuSection />
    </StyledWrapper>
  </HomeTemplate>
);

export default IndexPage;
