import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { StyledSection, StyledWrapper } from '../common/common';
import Tabs from '../common/Tabs';
import ShopItem from './ShopItem';

const StyledShopWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const StyledShopItemsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  width: 70%;
  padding-left: 0;
  justify-self: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const tabs = ['mains', 'breakfast', 'desserts'];

const ShopSection = ({
  photos: {
    allFile: { edges },
  },
  dishes,
}) => {
  const [activeTab, setTab] = useState('mains');
  return (
    <StyledSection title="shop">
      <StyledShopWrapper>
        <Tabs tabs={tabs} setTab={setTab} activeTab={activeTab} />
        <StyledShopItemsWrapper>
          {dishes.map(
            meal =>
              meal.node.frontmatter.category === activeTab && (
                <ShopItem
                  dish={meal}
                  key={meal.node.frontmatter.id}
                  photo={edges.find(
                    edge =>
                      edge.node.name.toLowerCase() ===
                      meal.node.frontmatter.title.toLowerCase()
                  )}
                />
              )
          )}
        </StyledShopItemsWrapper>
      </StyledShopWrapper>
    </StyledSection>
  );
};

ShopSection.propTypes = {
  photos: PropTypes.shape().isRequired,
  dishes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/shop/" } }) {
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
    render={data => <ShopSection photos={data} {...props} />}
  />
);
