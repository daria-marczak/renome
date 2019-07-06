import React from 'react';
import styled from 'styled-components';
import {
  StyledDescription,
  StyledParagraph,
  StyledWrapper,
} from '../common/common';

const StyledContactWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    order: 2;
  }
`;

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
`;

const StyledText = styled(StyledParagraph)`
  margin-top: 0;
  text-transform: uppercase;
`;

const StyledTitle = styled(StyledDescription)`
  text-transform: uppercase;
`;

const ContactDetails = () => (
  <StyledContactWrapper>
    <StyledHeading>Contact details</StyledHeading>
    <StyledTitle>Address</StyledTitle>
    <StyledText>355 E 5TH, st. Manhattan, NY 100003</StyledText>
    <StyledTitle>Phone</StyledTitle>
    <StyledText>+ 1 939 777 55 33</StyledText>
    <StyledTitle>Email</StyledTitle>
    <StyledText>reservation@renome.com</StyledText>
  </StyledContactWrapper>
);

export default ContactDetails;
