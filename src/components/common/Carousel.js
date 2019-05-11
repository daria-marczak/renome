import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  height: 250px;
  width: 300px;
  overflow: 'hidden';
`;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "carousel" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const length = allFile.edges.length - 1;

  const handleChange = isNext =>
    index === length
      ? isNext
        ? setIndex(0)
        : setIndex(length)
      : isNext
      ? setIndex(index + 1)
      : setIndex(index - 1);

  const { node } = allFile.edges[index];

  return (
    <StyledWrapper>
      <Img fluid={node.childImageSharp.fluid} key={node.id} alt={node.name} />

      <button type="button" onClick={() => handleChange(true)}>
        Previous
      </button>
      <button type="button" onClick={() => handleChange(false)}>
        Next
      </button>
    </StyledWrapper>
  );
};

export default Carousel;
