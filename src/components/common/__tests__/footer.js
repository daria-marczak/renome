import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Footer from '../Footer';
import { theme } from '../../../assets/styles/theme';

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

describe('Footer', () => {
  it('renders correctly', () => {
    const { getByTestId } = renderComponent({ theme });
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
