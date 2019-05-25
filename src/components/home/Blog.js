import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import {
  StyledHeading,
  StyledDescription,
  StyledSection,
  StyledSectionLink,
  StyledThreeColumnGrid,
} from '../common/common';

const StyledBlogSection = styled(StyledSection)`
  position: relative;
  margin-bottom: 50px;
`;

const StyledBlogPost = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.white};
  transform: translateY(-128%) translateX(12%);
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    width: 260px;
    height: 260px;
    transform: translateY(-130%) translateX(12%);
  }
`;

const StyledTitle = styled(StyledDescription)`
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
`;

const StyledImage = styled(Img)`
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    width: 320px;
    height: 320px;
  }
`;

const StyledDate = styled.p`
  color: #dcdee0;
  font-weight: 700;
`;

const StyledBlogWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Blog = ({
  data: {
    allFile: { edges },
  },
}) => {
  const blogPosts = [
    { date: '10/03', title: 'grand opening!' },
    { date: '07/03', title: 'mini chilli pretzels' },
    { date: '05/06', title: 'summer specials' },
  ];

  return (
    <StyledBlogSection name="blog">
      <StyledBlogWrapper>
        <StyledHeading>blog</StyledHeading>
        <StyledDescription>news, recipes and much more</StyledDescription>
        <StyledThreeColumnGrid>
          {blogPosts.map((post, index) => (
            <div key={post.date}>
              <StyledImage
                key={post.date}
                fluid={edges[index].node.childImageSharp.fluid}
              />
              <StyledBlogPost>
                <StyledDate>{post.date}</StyledDate>
                <StyledTitle>{post.title}</StyledTitle>
                <StyledSectionLink to={`/${post.title}.split(" ").join("")`}>
                  ...
                </StyledSectionLink>
              </StyledBlogPost>
            </div>
          ))}
        </StyledThreeColumnGrid>
      </StyledBlogWrapper>
    </StyledBlogSection>
  );
};

Blog.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/blog/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Blog data={data} {...props} />}
  />
);
