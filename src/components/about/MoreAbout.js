import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Gallery from '../common/Gallery';
import {
  StyledDescription,
  StyledParagraph,
  StyledSection,
  StyledWrapper,
  StyledColumn,
} from '../common/common';

const StyledOpeningHoursBox = styled.div`
  text-align: center;
  border: 5px solid ${({ theme }) => theme.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  text-transform: uppercase;
`;

const StyledStrongParagraph = styled(StyledParagraph)`
  font-weight: 700;
`;

const MoreAbout = ({
  data: {
    allFile: { edges },
  },
}) => {
  return (
    <StyledSection title="More about">
      <StyledWrapper>
        <StyledColumn>
          <Gallery photos={edges} />
        </StyledColumn>
        <StyledColumn isDescription>
          <StyledOpeningHoursBox>
            <StyledDescription>opening hours</StyledDescription>
            <StyledStrongParagraph>monday - friday</StyledStrongParagraph>
            <StyledParagraph>9.00 - 22.00</StyledParagraph>
            <StyledStrongParagraph>saturday - sunday</StyledStrongParagraph>
            <StyledParagraph>10.00 - 21.00</StyledParagraph>
          </StyledOpeningHoursBox>
        </StyledColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

MoreAbout.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <MoreAbout data={data} {...props} />}
  />
);
