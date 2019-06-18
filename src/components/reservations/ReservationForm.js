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

  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(now);
  const [people, setPeopleAmount] = useState(0);

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
            required
          />
        </label>
        <label htmlFor="reservationTime">
          Start date:
          <input
            type="time"
            id="reservationTime"
            name="reservation-time"
            min={time}
            value={time}
            onChange={event => setTime(event.target.value)}
            required
          />
        </label>
        <label htmlFor="peopleAmount">
          People amount:
          <input
            type="number"
            min="1"
            max="10"
            id="peopleAmount"
            value={people}
            onChange={event => setPeopleAmount(event.target.value)}
            required
          />
        </label>
      </form>
    </StyledWrapper>
  );
};

ReservationForm.propTypes = {};

export default ReservationForm;
