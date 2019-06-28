import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as blogActions from './logic/blogActions';
import formatDate from '../../utils/formatDate';
import { StyledParagraph } from '../common/common';

const StyledCommentSection = styled.ul`
  padding-left: 0;
  border-top: 2px solid ${({ theme }) => theme.lightGray};
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

const StyledSectionHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
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

const StyledForm = styled.form`
  border-top: 2px solid ${({ theme }) => theme.lightGray};
  margin-top: 20px;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledInput = styled.input`
  border: none;
  margin-top: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.lightGray};
  padding: 10px 5px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  width: 100%;

  @media (min-width: 1200px) {
    margin-left: 10px;
    width: ${({ placeholder }) => (placeholder === 'Message' ? '100%' : '50%')};
  }
  &:first-of-type {
    margin-left: 0;
  }
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
  margin: 20px 0 20px 0;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  align-self: center;

  @media (min-width: 1200px) {
    width: auto;
  }
`;

class BlogComments extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      email: '',
      message: '',
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    const { createComment } = this.props;

    event.preventDefault();
    createComment({ comment: this.state });
  };

  render() {
    const { author, email, message } = this.state;
    const { comments } = this.props;

    const title =
      comments.length !== 1
        ? `${comments.length} comments`
        : `${comments.length} comment`;

    return (
      <StyledCommentSection>
        <StyledSectionHeader>{title}</StyledSectionHeader>
        {comments.map(comment => (
          <StyledComment key={comment.id}>
            <StyledCommentAuthor>
              <StyledMobileComment>
                <StyledAvatar />
                <StyledMobileParagraph>{comment.author}</StyledMobileParagraph>
                <StyledDate>{formatDate(comment.date)}</StyledDate>
              </StyledMobileComment>
              <StyledAuthorParagraph>{comment.author}</StyledAuthorParagraph>
              <StyledCommentContent>{comment.content}</StyledCommentContent>
            </StyledCommentAuthor>
          </StyledComment>
        ))}
        <StyledForm onSubmit={this.onSubmit}>
          <StyledSectionHeader>Leave a reply</StyledSectionHeader>
          <StyledFormWrapper>
            <StyledInput
              type="text"
              required
              placeholder="Name"
              value={author}
              onChange={event => this.onChange(event)}
              name="author"
            />
            <StyledInput
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={event => this.onChange(event)}
              name="email"
            />
          </StyledFormWrapper>
          <StyledInput
            type="text"
            required
            placeholder="Message"
            value={message}
            onChange={event => this.onChange(event)}
            name="message"
          />
          <StyledButton type="submit">Post comment</StyledButton>
        </StyledForm>
      </StyledCommentSection>
    );
  }
}

BlogComments.propTypes = {
  createComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};

BlogComments.defaultProps = {
  comments: [],
};

const mapStateToProps = state => ({
  comments: state.blog.comments,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createComment: blogActions.createComment,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogComments);
