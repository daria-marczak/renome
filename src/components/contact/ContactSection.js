import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import PhotoComponent from '../common/PhotoComponent';
import {
  StyledHeading,
  StyledDescription,
  StyledParagraph,
  StyledSection,
  StyledWrapper,
  StyledColumn,
} from '../common/common';

const GoalsColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    justify-self: end;
  }
`;

const StyledSwitched = styled(StyledColumn)`
  @media (min-width: 1500px) {
    transform: translateX(-200px);
  }

  @media (min-width: 1200px) {
    transform: translateX(-200px);
  }
`;

const ContactSection = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;
  return (
    <StyledSection title="goals" align>
      <StyledWrapper>
        <StyledSwitched right>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
          />
        </StyledSwitched>
        <GoalsColumn isDescription left>
          <StyledHeading>happy</StyledHeading>
          <StyledDescription>to hear from you, contact s</StyledDescription>
          <StyledParagraph>
            Please feel free to contact us with any questions or to make
            reservations. If no one is available to take your call, please leave
            a message. We will contact you as soon as possible.
          </StyledParagraph>
        </GoalsColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

ContactSection.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      allFile: PropTypes.shape(
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
        allFile(filter: { absolutePath: { regex: "/contact/" } }) {
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
    render={data => <ContactSection data={data} {...props} />}
  />
);
