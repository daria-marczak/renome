import React from 'react';
import styled from 'styled-components';
import menu from './menuData';
import { StyledSection, StyledWrapper } from '../common/common';
import MenuTabs from './MenuTabs';

const StyledMenuWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Menu = () => {
  return (
    <StyledSection title="menu">
      <StyledMenuWrapper>
        <MenuTabs tabs={menu.map(dishes => dishes.type)} menu={menu} />
      </StyledMenuWrapper>
    </StyledSection>
  );
};

export default Menu;
