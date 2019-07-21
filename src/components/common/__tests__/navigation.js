import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../Navigation';
import theme from '../../../assets/styles/theme';
import * as pages from '../__mocks__/pages';

jest.mock('../__mocks__/pages');

describe('Navigation', () => {
  it('should be rendered', () => {
    const { getByTestId } = render(
      <Navigation theme={theme} pages={pages.pages} />
    );
    expect(getByTestId('navigation')).toBeInTheDocument();
  });

  it('should have correct number of pages', () => {
    const { getByTestId } = render(
      <Navigation theme={theme} pages={pages.pages} />
    );

    expect(getByTestId('navigation').children).toHaveLength(7);
  });
});
