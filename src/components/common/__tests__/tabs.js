import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Tabs from '../Tabs';
import { theme } from '../../../assets/styles/theme';
import * as tabs from '../__mocks__/tabs';

jest.mock('./tabs');
const setTab = jest.fn;

const renderComponent = ({ theme }) =>
  render(
    <ThemeProvider theme={theme}>
      <Tabs tabs={tabs.tabs} activeTab="Breakfast" setTab={setTab} />
    </ThemeProvider>
  );

describe('Tabs', () => {
  const { getByTestId } = renderComponent({ theme });

  it('renders component', () => {
    expect(getByTestId('tabsComponent')).toBeInTheDocument();
  });

  it('has active tab with correct text', () => {
    const { getByTestId } = renderComponent({ theme });
    expect(getByTestId('activeTab')).toHaveTextContent('Breakfast');
  });

  it('has active tab with correct styling', () => {
    const { getByTestId } = renderComponent({ theme });

    expect(getByTestId('activeTab')).toHaveStyle(
      'border-bottom: 5px solid #985e5b'
    );
  });
});
