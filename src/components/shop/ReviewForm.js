import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shopActions from './logic/shopActions';

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};

  display: flex;
  flex-direction: column;
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
      rating: 1,
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
        <StyledButton type="submit">Post review</StyledButton>
      </StyledForm>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.blog.comments,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
