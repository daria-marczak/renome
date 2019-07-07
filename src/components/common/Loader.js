import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  position: absolute;
  height: 50px;
  width: inherit;

  &:before {
    animation: rotate 0.9s linear infinite both;
    border: 3px solid ${({ theme }) => theme.white};
    border-bottom-color: ${({ theme }) => theme.primary};
    border-radius: 100%;
    content: '';
    height: 20px;
    top: -20%;
    width: 20px;
    left: 43%;
    position: absolute;
    will-change: transform;
    transform-origin: center;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <StyledLoader
    role="alert"
    aria-live="assertive"
    aria-label="Content is loading"
  />
);

export default Loader;
