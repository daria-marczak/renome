import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render } from '@testing-library/react';
import Tabs from '../Tabs';
import theme from '../../../assets/styles/theme';
import * as tabs from '../__mocks__/tabs';

jest.mock('./tabs');

describe('Tabs', () => {
  it('renders correctly', () => {
    const tree = new ShallowRenderer(
      <Tabs theme={theme} tabs={tabs.tabs} activeTab="Breakfast" />
    );
    expect(tree).toMatchSnapshot();
  });

  it('has active tab with underline', () => {
    const { getByTestId } = render(
      <Tabs theme={theme} tabs={tabs.tabs} activeTab="Breakfast" />
    );
    expect(getByTestId('activeTab')).toHaveStyle(
      `border-bottom: 5px solid #985e5b`
    );
  });

  it('has active tab with correct text', () => {
    const { querryAllById } = render(
      <Tabs theme={theme} tabs={tabs.tabs} activeTab="Breakfast" />
    );
    expect(querryAllById('activeTab')).toHaveTextContent('Breakfast');
  });
});
