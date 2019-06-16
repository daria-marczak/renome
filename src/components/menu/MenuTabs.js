import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import MenuItem from './MenuItem';

const StyledTabContainer = styled.div`
  display: flex;
`;

const StyledTabLink = styled.div`
  border-bottom: 2px solid
    ${({ theme, isActive }) => (isActive ? theme.primary : theme.lightGray)};
  flex: 1;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  text-transform: uppercase;
  cursor: pointer;
`;

const StyledHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.playfair};
  text-align: center;
`;

const StyledMenuSection = styled.div`
  margin-bottom: 15px;
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
    <Fragment>
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
              {dish.dishes.map(item => {
                return (
                  <MenuItem
                    key={item.name}
                    dish={item}
                    photo={edges.find(edge => edge.node.name === item.name)}
                  />
                );
              })}
            </StyledMenuSection>
          ))
      )}
    </Fragment>
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
