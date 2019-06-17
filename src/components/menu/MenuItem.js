import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: start;
  margin-bottom: 15px;
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
  color: #e1e2e4;

  &:first-letter {
    font-weight: 700;
    color: ${({ theme }) => theme.black};
  }
`;

const StyledPriceContainer = styled.div`
  display: flex;
`;

const MenuItem = ({ dish, photo }) => {
  return (
    <StyledContainer>
      <StyledPhotoColumn>
        {photo && <StyledImage fluid={photo.node.childImageSharp.fluid} />}
        <StyledPriceContainer>
          <StyledPrice>$</StyledPrice>
          <StyledPrice>{dish.price}</StyledPrice>
        </StyledPriceContainer>
      </StyledPhotoColumn>
      <StyledDescriptionColumn>
        <StyledHeading>{dish.name}</StyledHeading>
        <StyledDescription>{dish.description}</StyledDescription>
      </StyledDescriptionColumn>
    </StyledContainer>
  );
};

MenuItem.propTypes = {
  dish: PropTypes.objectOf(PropTypes.string).isRequired,
  photo: PropTypes.shape().isRequired,
};

export default MenuItem;
