import React, { useState } from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';
import { StyledWrapper } from '../common/common';

const StyledHeading = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
`;

const ReservationForm = () => {
  const today = new Date().toISOString().substr(0, 10);
  const nextTwoWeeks = new Date(Date.now() + 12096e5)
    .toISOString()
    .substr(0, 10);
  const [date, setDate] = useState(today);

  return (
    <StyledWrapper>
      <StyledHeading>make a reservation</StyledHeading>
      <form>
        <label htmlFor="reservationDate">
          Start date:
          <input
            type="date"
            id="reservationDate"
            name="reservation-date"
            value={date}
            min={today}
            max={nextTwoWeeks}
            onChange={event => setDate(event.target.value)}
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
        <label htmlFor="peopleAmount">
          <input type="number" min="1" max="10" id="peopleAmount" />
        </label>
      </form>
    </StyledWrapper>
  );
};

ReservationForm.propTypes = {};

export default ReservationForm;
