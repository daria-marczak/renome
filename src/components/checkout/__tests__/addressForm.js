import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import AddressForm from '../AddressForm';
import { theme } from '../../../assets/styles/theme';

const onSubmit = jest.fn();

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <AddressForm onSubmit={onSubmit} type="Billing address" />
    </ThemeProvider>
  );

describe('AddressForm', () => {
  it('should be rendered', () => {
    const { getByTestId } = renderComponent({ theme });

    expect(getByTestId('checkoutAddressForm')).toBeInTheDocument();
  });
});
