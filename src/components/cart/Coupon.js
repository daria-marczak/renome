import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../common/common';
import Loader from '../common/Loader';

const StyledForm = styled.form`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    width: 50%;
  }
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  width: 100%;
  height: 50%;

  @media (min-width: 1200px) {
    width: 35%;
    margin-right: auto;
  }
`;

const Coupon = ({ onSubmit, isFetching }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(couponCode);

    setCouponCode('');
  };

  return (
    <StyledForm onSubmit={event => handleSubmit(event)}>
      <StyledInput
        type="text"
        placeholder="Coupon code"
        value={couponCode}
        onChange={event => setCouponCode(event.target.value)}
        name="coupon"
        aria-label="If you have a coupon code you'd like to use, type it here"
      />
      <StyledButton type="submit" disabled={isFetching}>
        {isFetching && <Loader />}
        {!isFetching && 'Apply coupon'}
      </StyledButton>
    </StyledForm>
  );
};

Coupon.propTypes = {
  onSubmit: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default Coupon;
