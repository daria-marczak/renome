import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Link } from 'gatsby';
import * as cartActions from './logic/cartActions';
import CartTable from './CartTable';
import TotalSection from './TotalSection';
import Coupon from './Coupon';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
`;

const StyledButton = styled(Link)`
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
  text-decoration: none;
  text-align: center;

  @media (min-width: 1200px) {
    width: auto;
    align-self: flex-end;
  }
`;

class CartSection extends Component {
  onRemove = productId => {
    this.props.removeItem(productId);
  };

  onSubmit = couponCode => {
    this.props.applyCoupon(couponCode);
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
        <CartTable
          products={filteredCartItems}
          cartItems={this.props.products}
          removeItem={this.onRemove}
        />
        <Coupon onSubmit={this.onSubmit} isFetching={this.props.isFetching} />
        <TotalSection
          products={filteredCartItems}
          cartItems={this.props.products}
        />
        <StyledButton to="/checkout">Proceed to checkout</StyledButton>
      </StyledWrapper>
    );
  }
}

CartSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  allProducts: PropTypes.arrayOf(PropTypes.shape()),
  removeItem: PropTypes.func,
  applyCoupon: PropTypes.func,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  products: state.cart.cartItems,
  isFetching: state.cart.fetching.fetchingCoupon,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      applyCoupon: cartActions.applyCoupon,
      removeItem: cartActions.removeItem,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);
