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
  letter-spacing: 0.04em;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const StyledBar = styled.nav`
  background: white;
  height: 86px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;
  padding: 2em 0.85em;
  font-weight: 700;
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
  bottom: 1.5em;
  margin-left: 0.5em;
  text-shadow: 1px 1px 2px gray;
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.primary};
  text-shadow: 1px 1px 2px #fff;
`;

const Header = ({ cartItems }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMobileNavigation = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <>
      <StyledBar>
        <img src={logo} alt="Renome logo" />
        <StyledNavigation>
          <img src={cartIcon} alt="cart" /> | {cartItems}
          <Hamburger onClick={toggleMobileNavigation} isOpen={isMenuOpen} />
        </StyledNavigation>
      </StyledBar>
      <StyledHeader>
        <MobileMenu isOpen={isMenuOpen} />
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
