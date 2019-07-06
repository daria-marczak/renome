import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import ContactSection from '../components/contact/ContactSection';
import ContactInfo from '../components/contact/ContactInfo';
import Footer from '../components/common/Footer';

const ContactPage = ({ data }) => (
  <HomeTemplate>
    <SEO title="Contact" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.contactHeader}
      section="contact"
      title="we welcome you in our restaurant"
    />
    <ContactSection />
    <ContactInfo />
    <Footer />
  </HomeTemplate>
);

export const query = graphql`
  query {
    contactHeader: file(relativePath: { eq: "images/headers/contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default ContactPage;
