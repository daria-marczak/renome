import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/images/logo.png';
import Facebook from '../../assets/icons/fb.png';
import Google from '../../assets/icons/gplus.png';
import Twitter from '../../assets/icons/twitter.png';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.lightGray};
  text-align: center;
  padding: 20px 0;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
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

  @media (min-width: 1200px) {
    margin-bottom: 0;
    margin-left: 10px;
  }
`;

const StyledIcon = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.black};
  margin-right: 10px;
`;

const StyledFollowColumn = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    order: 3;
    justify-self: center;
  }
`;

const StyledColumn = styled.div`
  @media (min-width: 1200px) {
    align-self: center;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFollowColumn>
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
    </StyledFollowColumn>
    <StyledColumn>
      <img src={Logo} alt="logo" />
    </StyledColumn>
    <StyledColumn>
      <StyledParagraph>Copyright 2015 renome by estetiq</StyledParagraph>
    </StyledColumn>
  </StyledFooter>
);

export default Footer;
