import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import PhotoComponent from '../common/PhotoComponent';
import {
  StyledHeading,
  StyledDescription,
  StyledParagraph,
  StyledSection,
  StyledSectionLink,
  StyledWrapper,
  StyledColumn,
} from '../common/common';

const ContactColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    justify-self: end;
  }
`;

const StyledSwitched = styled(StyledColumn)`
  @media (min-width: 1200px) {
    transform: translateX(-200px);
  }
`;

const Contact = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection name="contact" align>
      <StyledWrapper>
        <StyledSwitched right>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
            flipped
          />
        </StyledSwitched>
        <ContactColumn isDescription left>
          <StyledHeading>contact</StyledHeading>
          <StyledDescription>
            we welcome you in our restaurant
          </StyledDescription>
          <StyledParagraph>
            Please feel free to contact us with any questions or to make
            reservations. If no one is available to take your call, please leave
            a message. We will contact you as soon as possible.
          </StyledParagraph>
          <StyledSectionLink to="/contact">...</StyledSectionLink>
        </ContactColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

Contact.propTypes = {
  data: PropTypes.shape().isRequired,
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
    render={data => <Contact data={data} {...props} />}
  />
);
