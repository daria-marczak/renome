import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import Online from '../components/reservations/Online';

const Reservations = ({ data }) => (
  <HomeTemplate>
    <SEO title="Reservations" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.reservationsHeader}
      section="reservations"
      title="book a table at our restaurant now!"
    />
    <Online />
  </HomeTemplate>
);

export const query = graphql`
  query {
    reservationsHeader: file(
      relativePath: { eq: "images/headers/reservations.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

Reservations.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Reservations;
