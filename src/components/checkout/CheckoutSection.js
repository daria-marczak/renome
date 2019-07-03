import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as checkoutActions from './logic/checkoutActions';
import AddressForm from './AddressForm';
import Details from './Details';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

class CheckoutSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createAccount: false,
      shippingAddress: false,
      password: '',
    };
  }

  onSubmit = (data, type) => {
    this.props.checkoutProducts(data, type);
  };

  onChange = event => {
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };

  render() {
    return (
      <StyledWrapper>
        <AddressForm
          type="Billing address"
          onSubmit={this.onSubmit}
          shouldShowSubmitButton={!this.state.shippingAddress}
        />
        <Details
          onChange={this.onChange}
          createAccount={this.state.createAccount}
          shippingAddress={this.state.shippingAddress}
          password={this.state.password}
        />
        {this.state.shippingAddress && (
          <AddressForm type="Shipping address" onSubmit={this.onSubmit} />
        )}
      </StyledWrapper>
    );
  }
}

CheckoutSection.propTypes = {
  // eslint-disable-next-line react/require-default-props
  checkoutProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  comments: state.blog.comments,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      checkoutProducts: checkoutActions.checkoutProducts,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutSection);
