import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  margin-bottom: 15px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

const StyledImage = styled(Img)`
  width: 70px;
  height: 70px;
`;

const StyledHeading = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin: 0;
`;

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: 14px;
  margin-left: 0;
`;

const StyledPhotoColumn = styled.div`
  justify-self: center;
`;

const StyledDescriptionColumn = styled.div`
  margin-left: 5px;
`;

const StyledPrice = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.gray};

  &:first-letter {
    font-weight: 700;
    color: ${({ theme }) => theme.black};
  }
`;

const StyledPriceContainerMobile = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const StyledPriceContainerDesktop = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const MenuItem = ({ dish, photo }) => {
  return (
    <StyledContainer>
      <StyledPhotoColumn>
        {photo && <StyledImage fluid={photo.node.childImageSharp.fluid} />}
        <StyledPriceContainerMobile>
          <StyledPrice>$</StyledPrice>
          <StyledPrice>{dish.price}</StyledPrice>
        </StyledPriceContainerMobile>
      </StyledPhotoColumn>
      <StyledDescriptionColumn>
        <StyledHeading>{dish.name}</StyledHeading>
        <StyledDescription>{dish.description}</StyledDescription>
      </StyledDescriptionColumn>
      <StyledPriceContainerDesktop>
        <StyledPrice>$</StyledPrice>
        <StyledPrice>{dish.price}</StyledPrice>
      </StyledPriceContainerDesktop>
    </StyledContainer>
  );
};

MenuItem.propTypes = {
  dish: PropTypes.objectOf(PropTypes.string).isRequired,
  photo: PropTypes.shape().isRequired,
};

export default MenuItem;
