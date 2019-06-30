import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Tabs from '../common/Tabs';
import MenuItem from './MenuItem';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      <Tabs setTab={setTab} tabs={tabs} activeTab={activeTab} />
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
