import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Header from '../components/common/Header';
import { StyledDescription } from '../components/common/common';

const StyledHeading = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

const StyledBlogDescription = styled(StyledDescription)`
  text-align: center;
  text-transform: uppercase;
`;

const PostTemplate = ({
  data: {
    markdownRemark: { frontmatter: post },
    blogHeader,
  },
}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title={post.title} keywords={[`gatsby`, `application`, `react`]} />
      <Header
        photo={blogHeader}
        section="blog"
        title="news, recipes and much more"
      />
      <GlobalStyles />
      <main>
        <StyledBlogDescription>{post.category}</StyledBlogDescription>
        <StyledHeading>{post.title}</StyledHeading>
      </main>
    </>
  </ThemeProvider>
);

PostTemplate.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      markdownRemark: PropTypes.objectOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape(),
        })
      ),
    })
  ).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
        category
        author
      }
    }
    blogHeader: file(relativePath: { eq: "images/headers/blog.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default PostTemplate;
