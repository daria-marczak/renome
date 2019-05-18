import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  height: 250px;
  width: 300px;
  overflow: 'hidden';
`;

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);

  const length = data && data.allFile.edges.length - 1;

  const handleChange = isNext =>
    index === length
      ? isNext
        ? setIndex(0)
        : setIndex(length)
      : isNext
      ? setIndex(index + 1)
      : setIndex(index - 1);

  return (
    <StyledWrapper>
      {data.allFile.edges.map(({ node }) => (
        <Img fluid={node.childImageSharp.fluid} key={node.id} alt={node.name} />
      ))}

      <button type="button" onClick={() => handleChange(true)}>
        Previous
      </button>
      <button type="button" onClick={() => handleChange(false)}>
        Next
      </button>
    </StyledWrapper>
  );
};

// eslint-disable-next-line react/display-name
export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/carousel/" } }) {
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
    render={data => <Carousel data={data} {...props} />}
  />
);

Carousel.propTypes = {
  data: PropTypes.shape().isRequired,
};
