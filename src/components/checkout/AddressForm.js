import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../common/common';
import Loader from '../common/Loader';

const StyledHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
`;

const StyledFormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  flex: 1;
`;

const StyledOneLine = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 30px 5px;
  text-transform: uppercase;
  font-size: 14px;

  @media (min-width: 1200px) {
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
  }
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
`;

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
      firstName: '',
      lastName: '',
      companyName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      county: '',
      postcode: '',
      emailAddress: '',
      phone: '',
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state, this.props.type);
  };

  render() {
    const {
      country,
      county,
      postcode,
      emailAddress,
      phone,
      city,
      firstName,
      lastName,
      companyName,
      addressLine1,
      addressLine2,
    } = this.state;

    const { type, shouldShowSubmitButton, isFetching } = this.props;

    return (
      <StyledFormWrapper data-testid="checkoutAddressForm">
        <StyledForm onSubmit={event => this.handleSubmit(event)}>
          <StyledHeading>{type}</StyledHeading>
          <StyledLabel
            fullWidth
            htmlFor="countryName"
            aria-label="Type your country name"
          >
            Country
            <StyledInput
              type="text"
              id="countryName"
              name="country"
              fullWidth
              placeholder="United Kingdom (UK)"
              value={country}
              onChange={event => this.onChange(event)}
              required
            />
          </StyledLabel>
          <StyledOneLine>
            <StyledLabel htmlFor="firstName" aria-label="Type your first name">
              First name
              <StyledInput
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={event => this.onChange(event)}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="lastName" aria-label="Type your last name">
              Last name
              <StyledInput
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={event => this.onChange(event)}
              />
            </StyledLabel>
          </StyledOneLine>
          <StyledLabel
            fullWidth
            htmlFor="companyName"
            aria-label="Type your company name"
          >
            Company name
            <StyledInput
              type="text"
              id="companyName"
              name="companyName"
              fullWidth
              value={companyName}
              onChange={event => this.onChange(event)}
              required
            />
          </StyledLabel>
          <StyledLabel
            fullWidth
            htmlFor="address"
            aria-label="Type your address"
          >
            Address
            <StyledInput
              type="text"
              id="address"
              placeholder="Street name"
              name="addressLine1"
              fullWidth
              value={addressLine1}
              onChange={event => this.onChange(event)}
              required
            />
            <StyledInput
              type="text"
              id="address"
              name="addressLine2"
              placeholder="Apartment, suite, unite, etc."
              fullWidth
              value={addressLine2}
              onChange={event => this.onChange(event)}
              required
            />
          </StyledLabel>
          <StyledLabel
            fullWidth
            htmlFor="city"
            aria-label="Type your city name"
          >
            Town / city
            <StyledInput
              type="text"
              id="city"
              name="city"
              fullWidth
              value={city}
              onChange={event => this.onChange(event)}
              required
            />
          </StyledLabel>
          <StyledOneLine>
            <StyledLabel htmlFor="county" aria-label="Type your county name">
              County
              <StyledInput
                type="text"
                id="county"
                name="county"
                value={county}
                onChange={event => this.onChange(event)}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="postcode" aria-label="Type your postcode">
              Postcode
              <StyledInput
                type="text"
                id="postcode"
                name="postcode"
                value={postcode}
                onChange={event => this.onChange(event)}
                required
              />
            </StyledLabel>
          </StyledOneLine>
          <StyledOneLine>
            <StyledLabel
              htmlFor="emailAddress"
              aria-label="Type your email address"
            >
              Email address
              <StyledInput
                type="text"
                id="emailAddress"
                name="emailAddress"
                value={emailAddress}
                onChange={event => this.onChange(event)}
                required
              />
            </StyledLabel>
            <StyledLabel htmlFor="phone" aria-label="Type your phone number">
              Phone
              <StyledInput
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={event => this.onChange(event)}
                required
              />
            </StyledLabel>
          </StyledOneLine>
          {shouldShowSubmitButton && (
            <StyledButton disabled={isFetching}>
              {isFetching && <Loader />}
              {!isFetching && 'Place order'}
            </StyledButton>
          )}
        </StyledForm>
      </StyledFormWrapper>
    );
  }
}

AddressForm.propTypes = {
  type: PropTypes.string.isRequired,
  shouldShowSubmitButton: PropTypes.bool,
  isFetching: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

AddressForm.defaultProps = {
  shouldShowSubmitButton: true,
};

export default AddressForm;
