import React from 'react';
import PropTypes from 'prop-types';
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

const Contact = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection name="contact" align>
      <StyledWrapper>
        <StyledColumn>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
            flipped
          />
        </StyledColumn>
        <StyledColumn isDescription>
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
        </StyledColumn>
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
                fluid(maxWidth: 600) {
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
