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
import BlogHome from '../components/home/Blog';
import Contact from '../components/home/Contact';

const IndexPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Home" keywords={[`renome`, `restaurant`]} />
    <Header photo={data.homeHeader} section="made with love" title="for you" />
    <About />
    <LunchOfDay />
    <MenuSection />
    <Quote />
    <Reservation />
    <Services />
    <BlogHome />
    <Contact />
  </HomeTemplate>
);

export const query = graphql`
  query {
    homeHeader: file(relativePath: { eq: "images/headers/home.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
