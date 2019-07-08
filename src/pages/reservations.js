import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';
import Online from '../components/reservations/Online';
import ReservationForm from '../components/reservations/ReservationForm';
import * as reservationActions from '../components/reservations/logic/reservationActions';

const Reservations = ({ data, addReservation, isFetching }) => (
  <HomeTemplate>
    <SEO title="Reservations" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.reservationsHeader}
      section="reservations"
      title="book a table at our restaurant now!"
    />
    <Online />
    <ReservationForm addReservation={addReservation} isFetching={isFetching} />
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
  isFetching: PropTypes.bool,
  addReservation: PropTypes.func,
};

const mapStateToProps = state => ({
  isFetching: state.reservation.fetching.fetchingReservation,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addReservation: reservationActions.addReservation,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reservations);
