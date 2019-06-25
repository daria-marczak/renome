import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BlogPost from '../components/blog/BlogPost';

const PostTemplate = ({
  data: { markdownRemark: post, allMarkdownRemark, allFile, blogHeader },
}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Header
        photo={blogHeader}
        section="blog"
        title="news, recipes and much more"
      />
      <GlobalStyles />
      <main>
        <BlogPost
          post={post}
          allPosts={allMarkdownRemark}
          photos={allFile.edges}
        />
      </main>
      <Footer />
    </>
  </ThemeProvider>
);

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        id
        date
        tags
        category
        author
        aboutAuthor
      }
    }

    blogHeader: file(relativePath: { eq: "images/headers/blog.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }

    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
            isPopular
          }
        }
      }
    }

    allFile(filter: { absolutePath: { regex: "/blogSection/" } }) {
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
`;

export default PostTemplate;
