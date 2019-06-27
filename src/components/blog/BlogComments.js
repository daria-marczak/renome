import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as blogActions from './logic/blogActions';
import { StyledParagraph } from '../common/common';

const StyledCommentSection = styled.ul`
  padding-left: 0;
`;

const StyledComment = styled.li`
  list-style-type: none;
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

const StyledDate = styled.p`
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 1200px) {
    margin-top: 0;
    margin-left: auto;
  }
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

class BlogComments extends PureComponent {
  render() {
    return (
      <StyledCommentSection>
        <StyledComment>
          <StyledCommentAuthor>
            <StyledMobileComment>
              <StyledAvatar />
              <StyledMobileParagraph>John Doe</StyledMobileParagraph>
              <StyledDate>Apr 25, 12:45PM</StyledDate>
            </StyledMobileComment>
            <StyledAuthorParagraph>John Doe</StyledAuthorParagraph>
            <StyledCommentContent>
              Percolator cup medium, organic doppio acerbic wings rich french
              press. Galão, brewed cultivar dark filter redeye medium mazagran.
              That and milk black, dripper, kopi-luwak, cup chicory shop extra
              viennese.
            </StyledCommentContent>
          </StyledCommentAuthor>
        </StyledComment>
      </StyledCommentSection>
    );
  }
}

BlogComments.propTypes = {};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createComment: blogActions.createComment,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(BlogComments);
