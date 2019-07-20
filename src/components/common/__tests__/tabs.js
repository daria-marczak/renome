import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tabs from '../Tabs';
import theme from '../../../assets/styles/theme';
import * as tabs from '../__mocks__/tabs';

jest.mock('./tabs');

const setTab = jest.fn();

describe('Tabs', () => {
  it('renders correctly', () => {
    const tree = new ShallowRenderer(
      (
        <Tabs
          theme={theme}
          tabs={tabs.tabs}
          activeTab="Breakfast"
          setTab={setTab}
        />
      )
    );
    expect(tree).toMatchSnapshot();
  });

  it('has 3 elements', () => {
    const wrapper = new ShallowRenderer(
      <Tabs theme={theme} tabs={tabs.tabs} activeTab="Breakfast" />
    );
    wrapper.find('div').toHaveLength(3);
  });
});
