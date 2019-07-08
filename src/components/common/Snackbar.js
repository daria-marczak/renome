import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: sticky;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  margin: 0 auto;
  padding: 15px 20px;
  border-top-left-radius: 4px;
  justify-content: space-between;
  border-top-right-radius: 4px;
  background-color: ${({ theme, type }) =>
    type === 'error' ? theme.black : theme.primary};
  color: ${({ theme }) => theme.white};

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const StyledClose = styled.div`
  height: 20px;
  width: 20px;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    bottom: 10px;
    height: 2px; /* cross thickness */
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const Snackbar = ({ message, type, isActive, closeMessage }) => (
  <StyledWrapper
    type={type}
    isOpen={isActive}
    role="alert"
    aria-live="assertive"
  >
    {message}
    <StyledClose onClick={closeMessage} />
  </StyledWrapper>
);

Snackbar.propTypes = {
  message: PropTypes.string,
  isActive: PropTypes.bool,
  type: PropTypes.string,
  closeMessage: PropTypes.func,
};

export default Snackbar;
