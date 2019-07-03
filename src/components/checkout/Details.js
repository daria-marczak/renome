import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.font.family.montserrat};

  &:before {
    content: '';
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
    width: 10px;
    height: 10px;
    background-color: ${({ checked }) => (checked ? '#333' : 'transparent')};
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Label} {
    &:before {
      background-color: red;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 5px;
  text-transform: uppercase;
  font-size: 14px;
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
`;

const Details = ({ createAccount, password, shippingAddress, onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="account" checked={createAccount}>
        <Input
          type="checkbox"
          id="account"
          name="createAccount"
          onChange={event => onChange(event)}
          checked={createAccount}
        />
        Create an account?
      </Label>
      {createAccount && (
        <div>
          <p>
            Create an account by entering the information below. If you are
            returning customer, please login at the top of the page
          </p>
          <StyledLabel htmlFor="password">
            Account password
            <StyledInput
              type="text"
              id="password"
              value={password}
              name="account"
              onChange={event => onChange(event)}
            />
          </StyledLabel>
        </div>
      )}
      <Label htmlFor="shippingAddress" checked={shippingAddress}>
        <Input
          type="checkbox"
          id="shippingAddress"
          name="shippingAddress"
          onChange={event => onChange(event)}
          checked={shippingAddress}
        />
        Ship to a different address?
      </Label>
    </Wrapper>
  );
};

Details.propTypes = {
  createAccount: PropTypes.bool.isRequired,
  shippingAddress: PropTypes.bool.isRequired,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Details.defaultProps = {
  password: '',
};

export default Details;
