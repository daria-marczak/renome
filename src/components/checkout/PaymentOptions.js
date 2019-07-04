import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 700;
  text-transform: uppercase;

  &:before {
    content: '';
    border-radius: 100%;
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.lightGray};
  }

  &:after {
    content: '';
    position: absolute;
    top: calc(100% / 4);
    left: 5px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    background-color: ${({ checked }) => (checked ? '#333' : 'transparent')};
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const PaymentOptions = ({ paymentMethod, onChange }) => (
  <StyledWrapper>
    <StyledForm>
      <Label checked={paymentMethod === 'bankTransfer'}>
        <Input
          type="radio"
          name="paymentMethod"
          value="bankTransfer"
          onChange={event => onChange(event)}
          checked={paymentMethod === 'bankTransfer'}
        />
        Direct bank transfer
      </Label>
      <Label checked={paymentMethod === 'cheque'}>
        <Input
          type="radio"
          name="paymentMethod"
          value="cheque"
          onChange={event => onChange(event)}
          checked={paymentMethod === 'cheque'}
        />
        Cheque payment
      </Label>
      <Label checked={paymentMethod === 'paypal'}>
        <Input
          type="radio"
          name="paymentMethod"
          value="paypal"
          onChange={event => onChange(event)}
          checked={paymentMethod === 'paypal'}
        />
        Paypal
      </Label>
    </StyledForm>
  </StyledWrapper>
);

PaymentOptions.propTypes = {
  paymentMethod: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PaymentOptions;
