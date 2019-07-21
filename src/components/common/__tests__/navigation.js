import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';
import { theme } from '../../../assets/styles/theme';
import * as pages from '../__mocks__/pages';

jest.mock('../__mocks__/pages');

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Navigation pages={pages.pages} />
    </ThemeProvider>
  );

describe('Navigation', () => {
  it('should be rendered', () => {
    const { getByTestId } = renderComponent({ theme });
    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('should have correct number of pages', () => {
    const { getByTestId } = renderComponent({ theme });

    expect(getByTestId('navigation').children).toHaveLength(7);
  });
});
