import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SEO from '../components/seo';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BlogPost from '../components/blog/BlogPost';
import Snackbar from '../components/common/Snackbar';
import * as appActions from '../appLogic/appActions';

const PostTemplate = ({
  isSnackBarActive,
  message,
  kind,
  closeMessage,
  data: { markdownRemark: post, allMarkdownRemark, allFile, blogHeader },
}) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={[`renome`, `restaurant`, `food`]}
      />
      <Header
        photo={blogHeader}
        section="blog"
        title="news, recipes and much more"
      />
      <GlobalStyles />
      <main>
        <BlogPost
          post={post.frontmatter.type !== 'shop' && post}
          allPosts={allMarkdownRemark.edges.filter(
            edge => edge.node.frontmatter.type !== 'shop'
          )}
          photos={allFile.edges}
        />
      </main>
      <Footer />
      {isSnackBarActive && (
        <Snackbar
          message={message}
          isActive={isSnackBarActive}
          type={kind}
          closeMessage={closeMessage}
        />
      )}
    </>
  </ThemeProvider>
);

PostTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  message: PropTypes.string,
  kind: PropTypes.string,
  closeMessage: PropTypes.func,
  isSnackBarActive: PropTypes.bool,
};

const mapStateToProps = state => ({
  kind: state.appData.message.kind,
  isSnackBarActive: state.appData.isSnackBarActive,
  message: state.appData.message.content,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      closeMessage: appActions.closeMessage,
    },
    dispatch
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        type
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
            type
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostTemplate);
