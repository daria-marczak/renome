import React, { Fragment } from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledHeading = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
`;

const ReservationForm = () => {
  const today = new Date();
  const nextTwoWeeks = today.getDate() + 14;

  return (
    <Fragment>
      <StyledHeading>make a reservation</StyledHeading>
      <form>
        <label htmlFor="reservationDate">
          Start date:
          <input
            type="date"
            id="reservationDate"
            name="reservation-date"
            value={today}
            min={today}
            max={nextTwoWeeks}
          />
        </label>
        <label htmlFor="reservationTime">
          Start date:
          <input
            type="time"
            id="reservationTime"
            name="reservation-time"
            value="13:00"
            step="1800"
          />
        </label>
      </form>
    </Fragment>
  );
};

ReservationForm.propTypes = {};

export default ReservationForm;
