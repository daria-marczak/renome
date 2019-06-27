import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Img from 'gatsby-image';
import * as blogActions from './logic/blogActions';
import { StyledDescription, StyledParagraph } from '../common/common';

const StyledArticle = styled.article`
  text-align: left;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const StyledBlogDescription = styled(StyledDescription)`
  color: ${({ theme }) => theme.gray};
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1em;
`;

const BlogItem = ({ post, photos, text, createComment }) => {
  return (
    <StyledArticle key={post.title}>
      <StyledHeading>{post.title}</StyledHeading>
      <StyledBlogDescription>{post.date}</StyledBlogDescription>
      <Img
        fluid={
          photos.find(edge => edge.node.name === post.title.toLowerCase()).node
            .childImageSharp.fluid
        }
        alt=""
      />
      <StyledParagraph onClick={() => createComment('something')}>
        {text}
      </StyledParagraph>
      <StyledLink
        to={`/blog/${post.title
          .split(' ')
          .join('')
          .toLowerCase()}`}
      >
        Continue reading...
      </StyledLink>
    </StyledArticle>
  );
};

BlogItem.propTypes = {
  text: PropTypes.string.isRequired,
  post: PropTypes.shape().isRequired,
  createComment: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createComment: blogActions.createComment,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(BlogItem);
