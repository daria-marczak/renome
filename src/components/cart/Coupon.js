import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  width: 100%;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const StyledButton = styled.button`
  background-color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.primary : '#1e2633'};
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  transition: background 0.3s ease-in;
  padding: 20px 20px;
  border: none;
  width: 100%;
  cursor: pointer;
  margin: 15px 0 20px 0;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  align-self: center;

  @media (min-width: 1200px) {
    width: auto;
    display: block;
  }
`;

const Coupon = ({ onSubmit }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(couponCode);
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <StyledInput
        type="text"
        placeholder="Coupon code"
        value={couponCode}
        onChange={event => setCouponCode(event.target.value)}
        name="coupon"
        aria-label="If you have a coupon code you'd like to use, type it here"
      />
      <StyledButton type="submit">Apply coupon</StyledButton>
    </form>
  );
};

Coupon.propTypes = {
  onSubmit: PropTypes.func,
};

export default Coupon;
