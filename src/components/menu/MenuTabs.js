import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import MenuItem from './MenuItem';

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

const StyledWrapper = styled.div`
  width: 100%;
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

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.playfair};
  text-align: center;
`;

const StyledMenuSection = styled.div`
  margin-bottom: 15px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const MenuTabs = ({
  tabs,
  menu,
  photos: {
    allFile: { edges },
  },
}) => {
  const [activeTab, setTab] = useState('Lunch');
  return (
    <StyledWrapper>
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
      {menu.map(
        meal =>
          meal.type === activeTab &&
          meal &&
          meal.categories.map(dish => (
            <StyledMenuSection key={dish.name}>
              <StyledHeading>{dish.name}</StyledHeading>
              <StyledList>
                {dish.dishes.map(item => {
                  return (
                    <MenuItem
                      key={item.name}
                      dish={item}
                      photo={edges.find(edge => edge.node.name === item.name)}
                    />
                  );
                })}
              </StyledList>
            </StyledMenuSection>
          ))
      )}
    </StyledWrapper>
  );
};

MenuTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  photos: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/restaurantMenu/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <MenuTabs photos={data} {...props} />}
  />
);
