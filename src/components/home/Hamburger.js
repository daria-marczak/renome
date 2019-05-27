import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  height: 1.5em;
  background: none;
  border: none;
  right: -0.5em;
  position: relative;
  top: 0.25em;
  cursor: pointer;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const InsideBurger = styled.div`
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.black};
  width: 1.5em;
  height: 0.2em;
  transition: background-color 0.3s 0.1s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0.4em;
    width: 1.5em;
    height: 0.2em;
    background-color: ${({ theme }) => theme.black};
    transition: transform 0.3s 0.1s ease-in;
  }

  &::before {
    top: 0.15em;
    transform: translateY(${({ isOpen }) => (isOpen ? '.55em' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  &::after {
    top: 1.2em;
    transform: translateY(${({ isOpen }) => (isOpen ? '-.55em' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InsideBurger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};

export default Hamburger;
