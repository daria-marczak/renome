import React, { useState } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { StyledWrapper, StyledButton } from '../common/common';
import Loader from '../common/Loader';
import { SingleDatePickerPhrases } from './phrases';
import '../../assets/styles/reactDatesOverrides.css';

const StyledHeading = styled.h3`
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
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
`;

const StyledImage = styled(Img)`
  width: 21px;
  height: 20px;

  & > img {
    object-fit: contain !important;
    object-position: 0% 0% !important;
  }
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-left: 10px;
  flex: 1;
  width: 100%;
`;

const StyleDates = styled(SingleDatePicker)`
  font-family: ${({ theme }) => theme.font.family.montserrat} !important;
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray} !important;
  margin-left: 10px;
  flex: 1;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    width: 200px;
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const ReservationForm = ({ data, isFetching, addReservation }) => {
  const today = moment().add(1, 'days');
  const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(now);
  const [people, setPeopleAmount] = useState(0);
  const [isFocused, setFocus] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    addReservation(date, time, people);
  };

  return (
    <StyledReservationWrapper>
      <StyledHeading>make a reservation</StyledHeading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormWrapper>
          <StyleDates
            date={date}
            onDateChange={date => setDate(date)}
            focused={isFocused}
            onFocusChange={() => setFocus(!isFocused)}
            id="reservation"
            noBorder
            small
            openDirection="up"
            numberOfMonths={1}
            phrases={SingleDatePickerPhrases}
            screenReaderInputMessage="Select date of your reservation"
            customInputIcon={
              <StyledImage fluid={data.calendar.childImageSharp.fluid} />
            }
          />
          <StyledLabel
            htmlFor="reservationTime"
            aria-label="Select time of your reservation"
          >
            <StyledImage fluid={data.hours.childImageSharp.fluid} />
            <StyledInput
              type="time"
              id="reservationTime"
              name="reservation-time"
              min="9:00"
              aria-valuemin={9}
              max="17:00"
              aria-valuemax={17}
              value={time}
              aria-label={`Your reservation time is ${time}`}
              onChange={event => setTime(event.target.value)}
              required
            />
          </StyledLabel>
          <StyledLabel
            htmlFor="peopleAmount"
            aria-label="Select number of people for your reservation"
          >
            <StyledImage fluid={data.people.childImageSharp.fluid} />
            <StyledInput
              type="number"
              min="1"
              aria-valuemin={1}
              max="10"
              aria-valuemax={10}
              id="peopleAmount"
              value={people}
              aria-label={`Number of people for the reservation is ${people}`}
              onChange={event => setPeopleAmount(event.target.value)}
              required
            />
          </StyledLabel>
        </StyledFormWrapper>
        <StyledButton type="submit" isSuccess disabled={isFetching}>
          {isFetching && <Loader />}
          {!isFetching && 'Make reservation'}
        </StyledButton>
      </StyledForm>
    </StyledReservationWrapper>
  );
};

ReservationForm.propTypes = {
  data: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool,
  addReservation: PropTypes.func,
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
