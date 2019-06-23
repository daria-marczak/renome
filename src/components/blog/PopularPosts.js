import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledPost = styled.article`
  display: flex;
  margin-bottom: 30px;
`;

const StyledPostHeading = styled.h3`
  margin: 0;
`;

const StyledImage = styled(Img)`
  width: 90px;
  height: 56px;
`;

const StyledDate = styled.p`
  font-weight: 600;
  color: #bbbdbf;
`;

const StyledWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  align-self: flex-start;
`;

const PopularPosts = ({ posts, photos }) => (
  <Fragment>
    {posts.map(post => (
      <StyledPost key={post.id}>
        <StyledImage
          fluid={
            photos.find(edge => edge.node.name === post.title).node
              .childImageSharp.fluid
          }
        />
        <StyledWrapper>
          <StyledPostHeading>{post.title}</StyledPostHeading>
          <StyledDate>{post.date}</StyledDate>
        </StyledWrapper>
      </StyledPost>
    ))}
  </Fragment>
);

PopularPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default PopularPosts;
