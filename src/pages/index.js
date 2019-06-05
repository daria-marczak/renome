import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import About from '../components/home/About';
import LunchOfDay from '../components/home/LunchOfDay';
import MenuSection from '../components/home/Menu';
import Quote from '../components/home/Quote';
import Reservation from '../components/home/Reservation';
import Services from '../components/home/Services';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import Footer from '../components/common/Footer';

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`renome`, `restaurant`]} />
    <Header photo={data.homeHeader} />
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

export const query = graphql`
  query {
    homeHeader: file(relativePath: { eq: "images/headers/home.png" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
