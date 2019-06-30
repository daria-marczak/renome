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
} from '../common/common';
import * as shopActions from './logic/shopActions';
import reviews from './logic/reviewsData';

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

const StyledPrice = styled(StyledDescription)`
  font-size: 18px;
  margin-top: 0;
`;

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  display: flex;
`;

const StyledButton = styled.button`
  background-color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.primary : '#1e2633'};
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  transition: background 0.3s ease-in;
  padding: 20px 20px;
  border: none;
  width: 100%;
  cursor: pointer;
  margin: 15px 0 20px 0;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  align-self: center;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

const StyledSectionHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-left: 10px;
  flex: 1;
`;

const StyledComment = styled.li`
  list-style-type: none;
  margin-top: 10px;
`;

const StyledCommentAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMobileComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    align-items: initial;
    justify-content: flex-start;
  }
`;

const StyledAuthorParagraph = styled.p`
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 1200px) {
    display: none;
    margin: 0;
  }
`;

const StyledMobileParagraph = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    margin: 0;
  }
`;

const StyledImage = styled(Img)`
  width: 400px;
  height: 400px;
`;

const StyledAvatar = styled.div`
  background: ${({ theme }) => theme.lightGray};
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const StyledCommentContent = styled(StyledParagraph)`
  font-size: 14px;
`;

const ProductPage = ({ photo, product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = event => {
    event.preventDefault();
    addToCart({ quantity, itemId: product.frontmatter.id });
  };

  return (
    <StyledSection title="shop">
      <StyledWrapper>
        <StyledColumn>
          <StyledImage fluid={photo.childImageSharp.fluid} />
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
          <StyledPrice>{product.frontmatter.price}</StyledPrice>
          <StyledParagraph>{product.frontmatter.description}</StyledParagraph>
          <StyledForm onSubmit={handleSubmit}>
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
            <StyledButton type="submit" aria-label="Buy">
              Add to cart
            </StyledButton>
          </StyledForm>
          <StyledSectionHeader>Reviews</StyledSectionHeader>
          {reviews.map(comment => (
            <StyledComment key={comment.id}>
              <StyledCommentAuthor>
                <StyledMobileComment>
                  <StyledAvatar />
                  <StyledMobileParagraph>
                    {comment.author}
                  </StyledMobileParagraph>
                  <StyledReview>
                    {Array(parseInt(comment.stars)).fill(
                      <StyledStar>&#9733;</StyledStar>
                    )}
                  </StyledReview>
                </StyledMobileComment>
                <StyledAuthorParagraph>{comment.author}</StyledAuthorParagraph>
                <StyledCommentContent>{comment.content}</StyledCommentContent>
              </StyledCommentAuthor>
            </StyledComment>
          ))}
        </StyledColumn>
      </StyledWrapper>
    </StyledSection>
  );
};

ProductPage.propTypes = {
  photo: PropTypes.shape().isRequired,
  product: PropTypes.shape().isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  comments: state.blog.comments,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToCart: shopActions.addToCart,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
