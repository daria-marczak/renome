import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/images/logo.png';
import Facebook from '../../assets/icons/fb.png';
import Google from '../../assets/icons/gplus.png';
import Twitter from '../../assets/icons/twitter.png';

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.lightGray};
  text-align: center;
  padding: 20px;
`;

const StyledParagraph = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.paragraph};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledIcon = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.black};
  margin-right: 10px;
`;

const Footer = () => (
  <StyledFooter>
    <StyledParagraph>Follow us:</StyledParagraph>
    <StyledContainer>
      <StyledIcon>
        <img src={Facebook} alt="facebook" />
      </StyledIcon>
      <StyledIcon>
        <img src={Google} alt="google plus" />
      </StyledIcon>
      <StyledIcon>
        <img src={Twitter} alt="twitter" />
      </StyledIcon>
    </StyledContainer>
    <img src={Logo} alt="logo" />
    <StyledParagraph>Copyright 2015 renome by estetiq</StyledParagraph>
  </StyledFooter>
);

export default Footer;
