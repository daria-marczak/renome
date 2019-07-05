import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatPrice from '../../utils/formatPrice';

const StyledWrapper = styled.article`
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.montserrat};

  @media (min-width: 1200px) {
    width: 50%;
    margin-left: 0;
  }
`;

const StyledTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 5px;
`;

const StyledTableCell = styled.div`
  padding: 15px 0;
  text-transform: capitalize;
  margin-left: ${({ right }) => (right ? 'auto' : '0')};
`;

const calculatePrice = (products, cartItems, shipping) => {
  let price = products.reduce((accumulator, currentValue) => {
    const quantity = cartItems.find(
      cartItem => cartItem.productId === currentValue.node.frontmatter.id
    ).quantity;
    return (accumulator += currentValue.node.frontmatter.price * quantity);
  }, 0);

  return shipping !== 'FREE' ? price : (price += shipping);
};

const verifyIfShippingCanBeFree = price => (price > 30 ? 0 : 10);

const TotalSection = ({ products, cartItems }) => {
  const subTotal = calculatePrice(products, cartItems);
  const shippingPrice = verifyIfShippingCanBeFree(parseInt(subTotal));

  return (
    <StyledWrapper>
      <StyledTableRow>
        <StyledTableCell>Subtotal</StyledTableCell>
        <StyledTableCell right>{formatPrice.format(subTotal)}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Shipping</StyledTableCell>
        <StyledTableCell right>
          {formatPrice.format(shippingPrice)}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Total</StyledTableCell>
        <StyledTableCell right>
          {formatPrice.format(subTotal + shippingPrice)}
        </StyledTableCell>
      </StyledTableRow>
    </StyledWrapper>
  );
};

TotalSection.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  cartItems: PropTypes.arrayOf(PropTypes.shape()),
};

export default TotalSection;
