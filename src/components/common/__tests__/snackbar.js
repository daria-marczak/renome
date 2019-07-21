import React from 'react';
import { render } from '@testing-library/react';
import Snackbar from '../Snackbar';

describe('Snackbar', () => {
  it('should be displayed if there is an error', () => {
    const { getByTestId } = render(<Snackbar isActive />);

    expect(getByTestId('snackbar')).toBeInTheDocument();
  });

  it('should contain an error message', () => {
    const { getByTestId } = render(
      <Snackbar isActive message="There was an error" />
    );

    expect(getByTestId('snackbar')).toHaveTextContent('There was an error');
  });
});
