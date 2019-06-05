import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import logo from '../../assets/images/logo.png';
import cartIcon from '../../assets/icons/cart.png';

import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

const StyledHeader = styled.header`
  min-height: 100vh;
  background-size: cover;
  font-size: ${({ theme }) => theme.font.size.header};
  color: #fff;
  letter-spacing: 0.04em;
  font-weight: 700;
  font-family: ${({ theme }) => theme.font.family.montserrat};

  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1200px) {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
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

const StyledNavigation = styled.nav`
  margin-left: auto;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  align-items: center;
`;

const StyledParagraph = styled.p`
  position: absolute;
  bottom: 1.5em;
  margin-left: 0.5em;
  text-shadow: 1px 1px 2px gray;

  @media (min-width: 1200px) {
    flex: 1;
    right: 85px;
  }
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.primary};
  text-shadow: 1px 1px 2px #fff;
`;

const StyledImage = styled.img`
  width: auto;
  height: fit-content;
`;

const StyledHero = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`;

const Header = ({ cartItems, photo }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMobileNavigation = () => {
    toggleMenu(!isMenuOpen);
  };

  return (
    <>
      <StyledBar>
        <StyledContainer>
          <StyledImage src={logo} alt="Renome logo" />
          <StyledNavigation>
            <Navigation />
            <StyledImage src={cartIcon} alt="cart" /> | {cartItems}
            <Hamburger onClick={toggleMobileNavigation} isOpen={isMenuOpen} />
          </StyledNavigation>
        </StyledContainer>
      </StyledBar>
      <StyledHeader>
        <MobileMenu isOpen={isMenuOpen} />
        <StyledHero fluid={photo.childImageSharp.fluid} />

        <StyledParagraph>
          made with love <br />
          <StyledText>for you</StyledText>
        </StyledParagraph>
      </StyledHeader>
    </>
  );
};

Header.propTypes = {
  photo: PropTypes.shape().isRequired,
  cartItems: PropTypes.number,
};

Header.defaultProps = {
  cartItems: 0,
};

export default Header;
