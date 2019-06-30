import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTabContainer = styled.div`
  display: flex;
  min-width: 375px;
  justify-self: center;
  border-bottom: 2px solid ${({ theme }) => theme.lightGray};

  @media (min-width: 1200px) {
    min-width: 400px;
    justify-self: center;
  }
`;

const StyledTabLink = styled.div`
  border-bottom: 5px solid
    ${({ theme, isActive }) => (isActive ? theme.primary : 'transparent')};
  flex: 1;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  text-transform: uppercase;
  transition: border-bottom 0.3s ease-in-out;
  cursor: pointer;

  @media (min-width: 1200px) {
    max-width: 130px;
  }
`;

const Tabs = ({ tabs, activeTab, setTab }) => {
  return (
    <StyledTabContainer>
      {tabs.map(tab => (
        <StyledTabLink
          key={tab}
          onClick={() => setTab(tab)}
          isActive={activeTab === tab}
        >
          {tab}
        </StyledTabLink>
      ))}
    </StyledTabContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default Tabs;
