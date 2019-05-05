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
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.white};
  transition: transform 0.3s ease-in;
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '-100%')});
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.black};
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
      <StyledLink to={`/${item}`} isOpen={isOpen} key={item}>
        {item}
      </StyledLink>
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
