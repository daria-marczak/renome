import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { StyledSection, StyledWrapper, StyledColumn } from '../common/common';

const StyledQuote = styled.p`
  transform: translateY(-70px);
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.jumbotron};

  @media (min-width: 1200px) {
    transform: translateY(190px);
  }
`;

const StyledAuthor = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  transform: translateY(-70px);
  font-size: ${({ theme }) => theme.font.size.paragraph};

  @media (min-width: 1200px) {
    transform: translateY(190px);
  }
`;

const StyledQuoteSection = styled(StyledSection)`
  background: ${({ theme }) => theme.lightGray};
  text-align: center;
`;

const StyledImage = styled(Img)`
  transform: translateY(-70px);

  @media (min-width: 1200px) {
    transform: translateY(-70px) translateX(250px);
    max-width: 50%;
  }
`;

const Quote = ({ data }) => (
  <StyledQuoteSection name="quote">
    <StyledWrapper>
      <StyledColumn>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
      </StyledColumn>
      <StyledColumn>
        <StyledQuote>
          &quot;The most romantic and perfect place&quot;
        </StyledQuote>
        <StyledAuthor>John Doe</StyledAuthor>
      </StyledColumn>
    </StyledWrapper>
  </StyledQuoteSection>
);

Quote.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { regex: "/quote/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Quote data={data} {...props} />}
  />
);
