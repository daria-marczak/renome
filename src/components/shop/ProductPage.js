import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
  StyledSection,
  StyledWrapper,
  StyledLevelTwoHeading,
  StyledColumn,
  StyledParagraph,
} from '../common/common';

const StyledShopHeading = styled(StyledLevelTwoHeading)`
  text-transform: lowercase;
  letter-spacing: 0.07em;
`;

const StyledStar = styled.p`
  color: ${({ theme }) => theme.primary};
`;
const StyledReview = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPage = ({ photo, product }) => (
  <StyledSection title="shop">
    <StyledWrapper>
      <StyledColumn>
        <Img fluid={photo.childImageSharp.fluid} />
      </StyledColumn>
      <StyledColumn>
        <StyledShopHeading>{product.frontmatter.title}</StyledShopHeading>
        <StyledReview>
          <StyledParagraph>{`${
            product.frontmatter.customers
          } customer review`}</StyledParagraph>
          {Array(parseInt(product.frontmatter.stars)).fill(
            <StyledStar>&#9733;</StyledStar>
          )}
        </StyledReview>
        <StyledParagraph>{product.frontmatter.description}</StyledParagraph>
      </StyledColumn>
    </StyledWrapper>
  </StyledSection>
);

ProductPage.propTypes = {
  photo: PropTypes.shape().isRequired,
  product: PropTypes.shape().isRequired,
};

export default ProductPage;
