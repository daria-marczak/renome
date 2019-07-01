import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledParagraph } from '../common/common';

const StyledAvatar = styled.div`
  background: ${({ theme }) => theme.lightGray};
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const StyledCommentContent = styled(StyledParagraph)`
  font-size: 14px;
`;

const StyledComment = styled.li`
  list-style-type: none;
  margin-top: 30px;
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

const StyledStar = styled.p`
  color: ${({ theme }) => theme.primary};
`;
const StyledReview = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ProductReviews = ({ review }) => (
  <StyledComment>
    <StyledCommentAuthor>
      <StyledMobileComment>
        <StyledAvatar />
        <StyledMobileParagraph>{review.author}</StyledMobileParagraph>
        <StyledReview>
          {Array(parseInt(review.stars)).fill(<StyledStar>&#9733;</StyledStar>)}
        </StyledReview>
      </StyledMobileComment>
      <StyledAuthorParagraph>{review.author}</StyledAuthorParagraph>
      <StyledCommentContent>{review.content}</StyledCommentContent>
    </StyledCommentAuthor>
  </StyledComment>
);

ProductReviews.propTypes = {
  review: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductReviews;
