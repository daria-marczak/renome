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

const Reservation = ({
  data: {
    allFile: { edges },
  },
}) => {
  const [firstPhoto, secondPhoto] = edges;

  return (
    <StyledSection title="reservation">
      <StyledWrapper>
        <StyledColumn>
          <PhotoComponent
            firstPhoto={firstPhoto.node}
            secondPhoto={secondPhoto.node}
            switched
            left
          />
        </StyledColumn>
        <StyledColumn isDescription>
          <StyledHeading>reservation</StyledHeading>
          <StyledDescription>
            book your table at our restaurant now!
          </StyledDescription>
          <StyledParagraph>
            When you finalize a reservation with OpenTable they will send you a
            confirmation email immediately. We will also call you on the date of
            your reservation to confirm your table.  If you do not receive an
            email, or do not hear from the restaurant, we would recommend
            calling to confirm your table and verify your reservation booking
            (+1 939 777 55 33).
          </StyledParagraph>
          <StyledSectionLink to="/reservation">...</StyledSectionLink>
        </StyledColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

Reservation.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/reservation/" } }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Reservation data={data} {...props} />}
  />
);
