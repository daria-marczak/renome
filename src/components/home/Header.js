import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import headerImage from '../../assets/images/home/header.png';
import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/icons/cart.png';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';

const StyledHeader = styled.header`
  min-height: 100vh;
  background: url(${headerImage}) no-repeat 25% center;
  background-size: cover;
  font-size: ${({ theme }) => theme.font.size.header};
  color: #fff;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const StyledBar = styled.nav`
  background: white;
  height: 86px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
  padding: 32px 12px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.paragraph};
`;

const StyledNavigation = styled.ul`
  margin-left: auto;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const StyledParagraph = styled.p`
  position: absolute;
  bottom: 30px;
  margin-left: 15px;
  text-shadow: 1px 1px 2px gray;
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.primary};
  text-shadow: 1px 1px 2px #fff;
`;

const Header = ({ cartItems }) => {
  const [isOpen, toggleMenu] = useState(false);

  const toggleMobileNavigation = () => {
    toggleMenu(!isOpen);
  };

  return (
    <>
      <StyledBar>
        <img src={logo} alt="Renome logo" />
        <StyledNavigation>
          <img src={cartIcon} alt="cart" /> | {cartItems}
          <Hamburger onClick={toggleMobileNavigation} isOpen={isOpen} />
        </StyledNavigation>
      </StyledBar>
      <StyledHeader>
        <MobileMenu isOpen={isOpen} />
        <StyledParagraph>
          made with love <br />
          <StyledText>for you</StyledText>
        </StyledParagraph>
      </StyledHeader>
    </>
  );
};

Header.propTypes = {
  cartItems: PropTypes.number,
};

Header.defaultProps = {
  cartItems: 0,
};

export default Header;
