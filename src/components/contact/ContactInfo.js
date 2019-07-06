import React from 'react';
import styled from 'styled-components';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { StyledWrapper } from '../common/common';

const StyledContactWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ContactInfo = () => (
  <StyledContactWrapper>
    <ContactDetails />
    <ContactForm />
  </StyledContactWrapper>
);

export default ContactInfo;
