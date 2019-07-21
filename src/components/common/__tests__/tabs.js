import React from 'react';
import { render } from '@testing-library/react';
import Tabs from '../Tabs';
import theme from '../../../assets/styles/theme';
import * as tabs from '../__mocks__/tabs';

jest.mock('./tabs');
const setTab = jest.fn;

describe('Tabs', () => {
  const { getByTestId, container } = render(
    <Tabs
      theme={theme}
      tabs={tabs.tabs}
      activeTab="Breakfast"
      setTab={setTab}
    />
  );

  it('renders component', () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it('has active tab with correct text', () => {
    expect(getByTestId('activeTab').innerHTML).toBe('Breakfast');
  });
});
