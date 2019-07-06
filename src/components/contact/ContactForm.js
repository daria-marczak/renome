import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as contactActions from './logic/contactActions';
import { StyledWrapper } from '../common/common';

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

const StyledButton = styled.button`
  background-color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.primary : theme.lightGray};
  text-transform: uppercase;
  color: ${({ theme }) => theme.black};
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
          <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
      </StyledContactWrapper>
    );
  }
}

ContactForm.propTypes = {
  sendMessage: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      sendMessage: contactActions.sendMessage,
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(ContactForm);
