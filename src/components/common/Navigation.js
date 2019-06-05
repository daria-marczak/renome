import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  margin-left: 30px;
  transition: color 0.15s ease-in;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledList = styled.ul`
  display: none;
  margin-right: 30px;
  height: 100%;

  @media (min-width: 1200px) {
    display: flex;
  }
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

const linkAddres = item => (item === 'home' ? '/' : `/${item}`);

const Navigation = () => (
  <StyledList>
    {pages.map(item => (
      <StyledLink to={`${linkAddres(item)}`} key={item} role="listitem">
        {item}
      </StyledLink>
    ))}
  </StyledList>
);

export default Navigation;
