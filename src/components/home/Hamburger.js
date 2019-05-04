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
`;

const InsideBurger = styled.div`
  background-color: ${({ theme }) => theme.black};
  width: 20px;
  height: 2px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 6px;
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.black};
  }

  &::before {
    top: 3px;
  }

  &::after {
    top: 15px;
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
