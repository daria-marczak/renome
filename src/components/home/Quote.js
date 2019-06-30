import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
  StyledSection,
  StyledWrapper,
  StyledColumn,
  StyledColumnCentered,
} from '../common/common';

const StyledQuote = styled.p`
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.jumbotron};

  @media (min-width: 1200px) {
    align-self: center;
  }
`;

const StyledAuthor = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.paragraph};
`;

const StyledQuoteSection = styled(StyledSection)`
  background-color: ${({ theme }) => theme.lightGray};
  text-align: center;
  margin-top: 50px;
`;

const StyledImage = styled(Img)`
  transform: translateY(-70px);

  @media (min-width: 1200px) {
    transform: translateY(-70px) translateX(250px);
    max-width: 50%;
  }
`;

const Quote = ({ data }) => (
  <StyledQuoteSection title="quote">
    <StyledWrapper>
      <StyledColumn>
        <StyledImage fluid={data.file.childImageSharp.fluid} />
      </StyledColumn>
      <StyledColumnCentered>
        <StyledQuote>
          &quot;The most romantic and perfect place&quot;
        </StyledQuote>
        <StyledAuthor>John Doe</StyledAuthor>
      </StyledColumnCentered>
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
