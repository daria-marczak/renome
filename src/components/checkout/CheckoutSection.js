import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as checkoutActions from './logic/checkoutActions';
import AddressForm from './AddressForm';
import Details from './Details';
import OrderDetails from './OrderDetails';
import PaymentOptions from './PaymentOptions';

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
      paymentMethod: 'bankTransfer',
    };
  }

  onSubmit = (data, type) => {
    this.props.addOrderDetails(data, type);
  };

  onChange = event => {
    this.setState({
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };

  changePaymentMethod = event => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.props.changePaymentMethod(this.state.paymentMethod);
      }
    );
  };

  render() {
    const filteredCartItems = this.props.products
      .map(product =>
        this.props.allProducts.filter(
          mdProduct => mdProduct.node.frontmatter.id === product.productId
        )
      )
      .flat();

    return (
      <StyledWrapper>
        <OrderDetails
          products={filteredCartItems}
          cartItems={this.props.products}
        />
        <PaymentOptions
          paymentMethod={this.state.paymentMethod}
          onChange={this.changePaymentMethod}
        />
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
  addOrderDetails: PropTypes.func,
  changePaymentMethod: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.shape()),
  allProducts: PropTypes.arrayOf(PropTypes.shape()),
};

const mapStateToProps = state => ({
  products: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      checkoutProducts: checkoutActions.checkoutProducts,
      addOrderDetails: checkoutActions.addOrderDetails,
      changePaymentMethod: checkoutActions.changePaymentMethod,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutSection);
