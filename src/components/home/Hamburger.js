import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  height: 20px;
  background: none;
  border: none;
  right: -8px;
  position: relative;
  top: 4px;
  cursor: pointer;
`;

const InsideBurger = styled.div`
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.black};
  width: 20px;
  height: 2px;
  transition: background-color 0.3s 0.1s ease-in;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 6px;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
    transition: transform 0.3s 0.1s ease-in;
  }

  &::before {
    top: 3px;
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  &::after {
    top: 15px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-6px' : '0')})
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
