import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
  StyledSection,
  StyledWrapper,
  StyledLevelTwoHeading,
  StyledColumn,
  StyledParagraph,
  StyledDescription,
  StyledButton,
} from '../common/common';
import * as cartActions from '../cart/logic/cartActions';
import ProductReviews from './ProductReviews';
import ReviewForm from './ReviewForm';
import Loader from '../common/Loader';

const StyledShopHeading = styled(StyledLevelTwoHeading)`
  text-transform: lowercase;
  letter-spacing: 0.07em;
`;

const StyledProductColumn = styled(StyledColumn)`
  @media (min-width: 1200px) {
    transform: translateX(-30%);
  }
`;

const StyledStar = styled.p`
  color: ${({ theme }) => theme.primary};
`;
const StyledReview = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPrice = styled(StyledDescription)`
  font-size: 18px;
  margin-top: 0;
`;

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  display: flex;
`;

const StyledSectionHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`;

const StyledReviewsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 1200px) {
    width: 55%;
  }
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-left: 10px;
`;

const StyledImage = styled(Img)`
  width: 300px;
  height: 300px;

  @media (min-width: 1200px) {
    width: 400px;
    height: 400px;
    transform: translateX(320px);
  }
`;

const ProductPage = ({ photo, product, addToCart, reviews, isFetching }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = event => {
    event.preventDefault();
    addToCart({ quantity, itemId: product.frontmatter.id });
  };

  return (
    <StyledSection title="shop">
      <StyledWrapper>
        <StyledProductColumn>
          <StyledImage fluid={photo.childImageSharp.fluid} />
        </StyledProductColumn>
        <StyledColumn isDescription>
          <StyledShopHeading>{product.frontmatter.title}</StyledShopHeading>
          <StyledReview>
            <StyledParagraph>{`${product.frontmatter.customers} customer review`}</StyledParagraph>
            {Array(parseInt(product.frontmatter.stars)).fill(
              <StyledStar>&#9733;</StyledStar>
            )}
          </StyledReview>
          <StyledPrice>{product.frontmatter.price}</StyledPrice>
          <StyledParagraph>{product.frontmatter.description}</StyledParagraph>
          <StyledForm onSubmit={handleAddToCart}>
            <StyledInput
              type="number"
              min="1"
              aria-valuemin={1}
              max="10"
              aria-valuemax={10}
              value={quantity}
              aria-label={`Number of items is ${quantity}`}
              onChange={event => setQuantity(event.target.value)}
              required
            />
            <StyledButton type="submit" aria-label="Buy" disabled={isFetching}>
              {isFetching && <Loader />}
              {!isFetching && 'Add to cart'}
            </StyledButton>
          </StyledForm>
        </StyledColumn>
      </StyledWrapper>
      <StyledReviewsSection>
        <StyledSectionHeader>Reviews</StyledSectionHeader>
        {reviews.map(review => (
          <ProductReviews review={review} key={review.id} />
        ))}
        <ReviewForm />
      </StyledReviewsSection>
    </StyledSection>
  );
};

ProductPage.propTypes = {
  photo: PropTypes.shape().isRequired,
  product: PropTypes.shape().isRequired,
  addToCart: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  reviews: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = state => ({
  reviews: state.shop.reviews,
  isFetching: state.cart.fetching.fetchingCart,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart: cartActions.addToCart,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
