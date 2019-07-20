import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../Footer';
import theme from '../../../assets/styles/theme';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = new ShallowRenderer(<Footer theme={theme} />);
    expect(tree).toMatchSnapshot();
  });
});
