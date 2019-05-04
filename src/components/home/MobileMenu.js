import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const StyledList = styled.ul`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: fixed;
  flex-direction: column;
  margin-top: 0;
  justify-content: center;
  background: ${({ theme }) => theme.white};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

const pages = [
  'home',
  'about',
  'menu',
  'reservations',
  'blog',
  'shop',
  'contact',
];

const MobileMenu = ({ isOpen }) => (
  <StyledList isOpen={isOpen}>
    {pages.map(item => (
      <Link to={item} isOpen={isOpen} key={item}>
        {item}
      </Link>
    ))}
  </StyledList>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
