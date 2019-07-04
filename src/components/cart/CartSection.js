import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as cartActions from './logic/cartActions';
import CartTable from './CartTable';
import TotalSection from './TotalSection';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

class CartSection extends Component {
  onRemove = productId => {
    this.props.removeItem(productId);
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
        <TotalSection
          products={filteredCartItems}
          cartItems={this.props.products}
        />
      </StyledWrapper>
    );
  }
}

CartSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  allProducts: PropTypes.arrayOf(PropTypes.shape()),
  removeItem: PropTypes.func,
};

const mapStateToProps = state => ({
  products: state.cart.cartItems,
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
