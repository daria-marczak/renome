import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shopActions from './logic/shopActions';
import Loader from '../common/Loader';
import { StyledButton } from '../common/common';

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};

  display: flex;
  flex-direction: column;
`;

const StyledSectionHeader = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
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
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-left: 10px;
  flex: 1;
`;

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      email: '',
      rating: '',
      message: '',
    };
  }

  onSubmit = event => {
    const { addReview } = this.props;

    event.preventDefault();
    addReview(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { author, email, rating, message } = this.state;
    const { isFetching } = this.props;

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledSectionHeader>Leave a review</StyledSectionHeader>
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
          type="number"
          required
          min={1}
          max={5}
          value={rating}
          placeholder="Rating"
          onChange={event => this.onChange(event)}
          name="rating"
        />
        <StyledInput
          type="text"
          required
          placeholder="Message"
          value={message}
          onChange={event => this.onChange(event)}
          name="message"
        />
        <StyledButton type="submit" disabled={isFetching}>
          {isFetching && <Loader />}
          {!isFetching && 'Post review'}
        </StyledButton>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.blog.comments,
  isFetching: state.shop.fetching.fetchingReviews,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addReview: shopActions.addReview,
    },
    dispatch
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
