import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import HomeTemplate from '../templates/HomeTemplate';
import SEO from '../components/seo';
import Header from '../components/common/Header';

import Footer from '../components/common/Footer';

const Blog = ({ data }) => (
  <HomeTemplate>
    <SEO title="Blog" keywords={[`renome`, `restaurant`]} />
    <Header
      photo={data.blogHeader}
      section="blog"
      title="news, recipes and much more"
    />
    <Footer />
  </HomeTemplate>
);

export const query = graphql`
  query {
    blogHeader: file(relativePath: { eq: "images/headers/blog.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Blog;
