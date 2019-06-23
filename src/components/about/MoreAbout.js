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
  width: 360px;
  height: 320px;
`;

const StyledStrongParagraph = styled(StyledParagraph)`
  font-weight: 700;
`;

const StyledBoxColumn = styled(StyledColumn)`
  justify-self: end;
`;

const StyledGalleryColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    transform: translateX(200px);
  }
`;

const StyledAboutSection = styled(StyledSection)`
  @media (min-width: 1200px) {
    height: 340px;
  }
`;

const MoreAbout = ({
  data: {
    allFile: { edges },
  },
}) => {
  return (
    <StyledAboutSection title="More about">
      <StyledWrapper>
        <StyledGalleryColumn>
          <Gallery photos={edges} />
        </StyledGalleryColumn>
        <StyledBoxColumn isDescription>
          <StyledOpeningHoursBox>
            <StyledDescription>opening hours</StyledDescription>
            <StyledStrongParagraph>monday - friday</StyledStrongParagraph>
            <StyledParagraph>9.00 - 22.00</StyledParagraph>
            <StyledStrongParagraph>saturday - sunday</StyledStrongParagraph>
            <StyledParagraph>10.00 - 21.00</StyledParagraph>
          </StyledOpeningHoursBox>
        </StyledBoxColumn>
      </StyledWrapper>
    </StyledAboutSection>
  );
};

MoreAbout.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      allFile: PropTypes.objectOf(
        PropTypes.shape({
          edges: PropTypes.array,
        })
      ),
    })
  ).isRequired,
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
