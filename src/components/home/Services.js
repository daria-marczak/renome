import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import {
  StyledHeading,
  StyledDescription,
  StyledSection,
  StyledSectionLink,
  StyledThreeColumnGrid,
} from '../common/common';

const StyledAdvantage = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 30px 20px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  text-align: center;
  border-bottom: 1px solid #d9d9d9;

  @media (min-width: 1200px) {
    height: 280px;
    border-bottom: none;
    border-right: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    &:last-of-type {
      border-right: none;
    }
  }
`;

const StyledLink = styled(StyledSectionLink)`
  background-color: #1e2633;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  padding: 10px 20px;
  position: absolute;
  bottom: 6%;
  left: 36%;
  cursor: pointer;
  z-index: 1;
  font-family: ${({ theme }) => theme.font.family.montserrat};

  @media (min-width: 1200px) {
    left: 47%;
    bottom: 9%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    left: 42%;
  }
`;

const StyledServices = styled(StyledSection)`
  text-align: center;
  position: relative;
`;

const StyledImage = styled(Img)`
  min-height: 100px;
`;

const Services = ({ data }) => {
  const servicesList = [
    'Pickup or delivery',
    'Serving with love',
    'Daily lunch specials',
  ];

  return (
    <StyledServices title="services">
      <StyledHeading>our services</StyledHeading>
      <StyledDescription>advantages of our restaurant</StyledDescription>
      <StyledThreeColumnGrid role="list">
        {servicesList.map(service => (
          <StyledAdvantage key={service} role="listitem">
            {service}
          </StyledAdvantage>
        ))}
      </StyledThreeColumnGrid>
      <StyledImage fluid={data.file.childImageSharp.fluid} />
      <StyledLink to="/order">order now</StyledLink>
    </StyledServices>
  );
};

Services.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(name: { regex: "/order/" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Services data={data} {...props} />}
  />
);
