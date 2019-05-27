import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledWrapper = styled.div`
  width: 600px;
  height: 400px;
  overflow: 'hidden';
  position: relative;
  transition: transform 0.3s ease-in;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledButtonsContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: -3%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background: #edeff2;
  margin-top: 8px;
  cursor: pointer;
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 700;
`;

const StyledPriceTag = styled.div`
  position: absolute;
  top: 84px;
  right: 20px;
  background: ${({ theme }) => theme.lightGray};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 6px 8px;
`;

const StyledImage = styled(Img)`
  width: 600px;
  height: 400px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: auto;
`;

const DesktopCarousel = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { node } = data.allFile.edges[index];

  const carouselData = [
    { day: 'monday', dish: 'home made baguette', price: '$8.95' },
    { day: 'tuesday', dish: 'miso ramen', price: '$12.35' },
    { day: 'wednesday', dish: 'curry duck', price: '$15.75' },
    { day: 'thursday', dish: 'pumpkin spicy pie', price: '$7.75' },
  ];

  const specificDay = carouselData.find(data => data.day === node.name);

  const length = data.allFile.edges.length - 1;

  const changeSlide = isPrev => {
    if (isPrev) {
      return index === 0 ? setIndex(length) : setIndex(index - 1);
    } else {
      return index === length ? setIndex(0) : setIndex(index + 1);
    }
  };

  return (
    <StyledWrapper>
      <StyledButtonsContainer>
        <StyledButton onClick={() => changeSlide(true)}>&lt;</StyledButton>
        <StyledButton onClick={() => changeSlide(false)}>&gt;</StyledButton>
      </StyledButtonsContainer>
      <StyledImage
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name}
      />
      <StyledPriceTag>{specificDay.price}</StyledPriceTag>
      <StyledContainer>
        <StyledDescription>{specificDay.dish}</StyledDescription>
        <StyledDay>{specificDay.day}</StyledDay>
      </StyledContainer>
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
    render={data => <DesktopCarousel data={data} {...props} />}
  />
);

DesktopCarousel.propTypes = {
  data: PropTypes.shape().isRequired,
};
