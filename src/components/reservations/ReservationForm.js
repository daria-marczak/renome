import React, { useState } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { StyledWrapper } from '../common/common';
import { SingleDatePickerPhrases } from './phrases';
import 'react-dates/lib/css/_datepicker.css';
import '../../assets/styles/reactDatesOverrides.css';

const StyledHeading = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
`;

const StyledReservationWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledButton = styled.button`
  background: #1e2633;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  padding: 20px 20px;
  border: none;
  width: 100%;
  margin: 15px 0 20px 0;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  align-self: center;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledImage = styled(Img)`
  width: 24px;
  height: 24px;
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-left: 10px;
  flex: 1;
`;

const StyleDates = styled(SingleDatePicker)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray} !important;
  margin-left: 10px;
  flex: 1;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    width: 200px;
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const ReservationForm = ({ data }) => {
  const today = moment().add(1, 'days');

  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(now);
  const [people, setPeopleAmount] = useState(0);
  const [isFocused, setFocus] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <StyledReservationWrapper>
      <StyledHeading>make a reservation</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormWrapper>
          {/* <StyledLabel htmlFor="reservationDate">
            <StyledImage fluid={data.calendar.childImageSharp.fluid} />
            <StyledInput
              type="date"
              id="reservationDate"
              name="reservation-date"
              value={date}
              min={today}
              max={nextTwoWeeks}
              onChange={event => setDate(event.target.value)}
              required
            />
          </StyledLabel> */}
          <StyleDates
            date={date}
            onDateChange={date => setDate(date)}
            focused={isFocused}
            onFocusChange={() => setFocus(!isFocused)}
            id="reservation"
            noBorder
            small
            phrases={SingleDatePickerPhrases}
            screenReaderInputMessage="Select date of your reservation"
            customInputIcon={
              <StyledImage fluid={data.calendar.childImageSharp.fluid} />
            }
          />
          <StyledLabel htmlFor="reservationTime">
            <StyledImage fluid={data.hours.childImageSharp.fluid} />
            <StyledInput
              type="time"
              id="reservationTime"
              name="reservation-time"
              min="9:00"
              max="17:00"
              value={time}
              onChange={event => setTime(event.target.value)}
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="peopleAmount">
            <StyledImage fluid={data.people.childImageSharp.fluid} />
            <StyledInput
              type="number"
              min="1"
              max="10"
              id="peopleAmount"
              value={people}
              onChange={event => setPeopleAmount(event.target.value)}
              required
            />
          </StyledLabel>
        </StyledFormWrapper>
        <StyledButton type="submit">Find a table</StyledButton>
      </StyledForm>
    </StyledReservationWrapper>
  );
};

ReservationForm.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        calendar: file(name: { regex: "/calendar/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        people: file(name: { regex: "/people/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        hours: file(name: { regex: "/hours/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <ReservationForm data={data} {...props} />}
  />
);
