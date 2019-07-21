import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import MobileMenu from '../MobileMenu';
import { theme } from '../../../assets/styles/theme';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <MobileMenu isOpen />
    </ThemeProvider>
  );

describe('Mobile menu', () => {
  const { getByTestId } = renderComponent({ theme });

  it('is visible when is open', () => {
    expect(getByTestId('mobileMenu')).toHaveStyle(`transform: translateX(0%)`);
  });
});
