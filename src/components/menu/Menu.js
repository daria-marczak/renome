import React from 'react';
import menu from './menuData';
import { StyledSection, StyledWrapper } from '../common/common';
import MenuTabs from './MenuTabs';

const Menu = () => {
  return (
    <StyledSection title="menu">
      <StyledWrapper>
        <MenuTabs tabs={menu.map(dishes => dishes.type)} menu={menu} />
      </StyledWrapper>
    </StyledSection>
  );
};

export default Menu;
