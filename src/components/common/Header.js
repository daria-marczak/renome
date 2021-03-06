import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
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
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.header};
`;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;

const StyledBar = styled.nav`
  background-color: white;
  height: 50px;
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

const StyledParagraph = styled.div`
  position: absolute;
  bottom: 1.5em;
  margin-left: 0.5em;
  text-shadow: 1px 1px 2px gray;

  @media (min-width: 1200px) {
    flex: 1;
    left: 180px;
  }
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.primary};
  text-shadow: 1px 1px 1px #fff;
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
  height: calc(var(--vh, 1vh) * 100);

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`;

const StyledFilter = styled.div`
  background-color: #162642;
  opacity: 0.6;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: absolute;
  bottom: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Header = ({ cartItems, photo, title, section }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const windowExist = typeof window === 'object';

  if (windowExist) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const toggleMobileNavigation = () => {
    toggleMenu(!isMenuOpen);
  };

  const cartItemQuantity = cartItems.reduce(
    (acc, curr) => (acc += curr.quantity),
    0
  );

  return (
    <>
      <StyledBar>
        <StyledContainer>
          <Link to="/">
            <StyledImage src={logo} alt="Renome logo" />
          </Link>
          <StyledNavigation>
            <Navigation />
            <StyledLink to="/cart">
              <StyledImage src={cartIcon} alt="cart" /> | {cartItemQuantity}
            </StyledLink>
            <Hamburger onClick={toggleMobileNavigation} isOpen={isMenuOpen} />
          </StyledNavigation>
        </StyledContainer>
      </StyledBar>
      <StyledHeader>
        <MobileMenu isOpen={isMenuOpen} />
        <StyledHero fluid={photo.childImageSharp.fluid} role="presentation" />
        <StyledFilter />
        <StyledParagraph>
          <StyledHeading>{section}</StyledHeading>
          <StyledText>{title}</StyledText>
        </StyledParagraph>
      </StyledHeader>
    </>
  );
};

Header.propTypes = {
  photo: PropTypes.shape().isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string,
  section: PropTypes.string,
};

Header.defaultProps = {
  cartItems: [],
  title: '',
  section: '',
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Header);
