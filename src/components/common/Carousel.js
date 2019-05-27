import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  overflow: 'hidden';
  position: relative;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const StyledButtonsContainer = styled.div`
  position: absolute;
  bottom: 120px;
  left: 34%;
`;

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  border: 3px solid ${({ theme }) => theme.white};
  border-radius: 100%;
  margin-left: 4px;
  cursor: pointer;
`;

const StyledPriceTag = styled.div`
  position: absolute;
  top: 24px;
  right: 20px;
  background: ${({ theme }) => theme.lightGray};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 6px 8px;
`;

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.carouselDescription};
`;

const StyledDay = styled.p`
  font-family: ${({ theme }) => theme.font.family.playfair};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.jumbotron};
  color: #dcdee0;
`;

const Carousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { node } = data.allFile.edges[index];

  const carouselData = [
    { day: 'monday', dish: 'home made baguette', price: '$8.95' },
    { day: 'tuesday', dish: 'miso ramen', price: '$12.35' },
    { day: 'wednesday', dish: 'curry duck', price: '$15.75' },
    { day: 'thursday', dish: 'pumpkin spicy pie', price: '$7.75' },
  ];

  const specificDay = carouselData.find(data => data.day === node.name);

  return (
    <StyledWrapper>
      <Img fluid={node.childImageSharp.fluid} key={node.id} alt={node.name} />
      <StyledPriceTag>{specificDay.price}</StyledPriceTag>
      <StyledButtonsContainer>
        {carouselData.map((day, index) => (
          <StyledButton
            key={day.day}
            style={{
              background: node.name === day.day ? 'white' : 'transparent',
            }}
            type="button"
            onClick={() => setIndex(index)}
          />
        ))}
      </StyledButtonsContainer>
      <StyledDescription>{specificDay.dish}</StyledDescription>
      <StyledDay>{specificDay.day}</StyledDay>
    </StyledWrapper>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/carousel/" } }) {
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
    render={data => <Carousel data={data} {...props} />}
  />
);

Carousel.propTypes = {
  data: PropTypes.shape().isRequired,
};
