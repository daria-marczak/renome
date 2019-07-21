import React from 'react';
import { render } from '@testing-library/react';
import MobileMenu from '../MobileMenu';
import theme from '../../../assets/styles/theme';

describe('Mobile menu', () => {
  const { getByTestId } = render(<MobileMenu isOpen theme={theme} />);

  it('is visible when is open', () => {
    expect(getByTestId('mobileMenu')).toHaveStyle(`transform: translateX(0%)`);
  });
});
