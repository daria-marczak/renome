import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as contactActions from './logic/contactActions';
import { StyledWrapper, StyledButton } from '../common/common';
import Loader from '../common/Loader';

const StyledHeading = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
`;

const StyledContactWrapper = styled(StyledWrapper)`
  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.font.family.montserrat};

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledInput = styled.input`
  border: none;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 15px 10px;
  border-bottom: 3px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    width: 100%;
    margin-left: 10px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <StyledContactWrapper>
        <StyledHeading>write a message</StyledHeading>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledFormWrapper>
            <StyledLabel>
              First name
              <StyledInput
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={event => this.handleChange(event)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Last name
              <StyledInput
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={event => this.handleChange(event)}
                required
              />
            </StyledLabel>
          </StyledFormWrapper>
          <StyledFormWrapper>
            <StyledLabel>
              Email
              <StyledInput
                type="email"
                name="email"
                value={this.state.email}
                onChange={event => this.handleChange(event)}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Subject
              <StyledInput
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={event => this.handleChange(event)}
                required
              />
            </StyledLabel>
          </StyledFormWrapper>
          <StyledLabel>
            Message
            <StyledInput
              type="text"
              name="message"
              value={this.state.message}
              onChange={event => this.handleChange(event)}
              required
              fullWidth
            />
          </StyledLabel>
          <StyledButton type="submit" disabled={this.props.isFetching}>
            {this.props.isFetching && <Loader />}
            {!this.props.isFetching && 'Send'}
          </StyledButton>
        </StyledForm>
      </StyledContactWrapper>
    );
  }
}

ContactForm.propTypes = {
  sendMessage: PropTypes.func,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  isFetching: state.contact.fetching.fetchingMessage,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendMessage: contactActions.sendMessage,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
