import React from 'react';

import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/home/Header';
import About from '../components/home/About';
import LunchOfDay from '../components/home/LunchOfDay';
import MenuSection from '../components/home/Menu';
import Quote from '../components/home/Quote';
import Reservation from '../components/home/Reservation';
import Services from '../components/home/Services';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import Footer from '../components/common/Footer';

const IndexPage = () => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <About />
    <LunchOfDay />
    <MenuSection />
    <Quote />
    <Reservation />
    <Services />
    <Blog />
    <Contact />
    <Footer />
  </HomeTemplate>
);

export default IndexPage;
