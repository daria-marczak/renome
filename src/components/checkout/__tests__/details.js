import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Details from '../Details';
import { theme } from '../../../assets/styles/theme';

const onSubmit = jest.fn();
const onChange = jest.fn();

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Details
        onSubmit={onSubmit}
        type="Billing address"
        createAccount
        onChange={onChange}
        password=""
        shippingAddress
      />
    </ThemeProvider>
  );

describe('AddressForm', () => {
  it('should be rendered', () => {
    const { getByTestId } = renderComponent({ theme });

    expect(getByTestId('checkoutDetails')).toBeInTheDocument();
  });
});
