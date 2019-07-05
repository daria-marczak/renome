import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatPrice from '../../utils/formatPrice';

const StyledWrapper = styled.article`
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;
`;

const StyledTable = styled.table`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  margin-bottom: 5px;
`;

const StyledTableCell = styled.td`
  padding: 15px 0;
  text-transform: capitalize;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};

  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

const StyledHeadTableCell = styled.td`
  padding: 15px 0;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

const CartTable = ({ products, cartItems, removeItem }) => {
  return (
    <StyledWrapper>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledHeadTableCell>Product</StyledHeadTableCell>
            <StyledHeadTableCell>Qty</StyledHeadTableCell>
            <StyledHeadTableCell>Price</StyledHeadTableCell>
            <StyledHeadTableCell>Total</StyledHeadTableCell>
            <StyledHeadTableCell>&nbsp;</StyledHeadTableCell>
          </StyledTableRow>
        </thead>
        <tbody>
          {products.map(product => (
            <StyledTableRow key={product.node.frontmatter.id}>
              <StyledTableCell>
                {product.node.frontmatter.title}
              </StyledTableCell>
              <StyledTableCell number>
                {
                  cartItems.find(
                    cartItem =>
                      cartItem.productId === product.node.frontmatter.id
                  ).quantity
                }
              </StyledTableCell>
              <StyledTableCell>
                {formatPrice.format(product.node.frontmatter.price)}
              </StyledTableCell>
              <StyledTableCell>
                {formatPrice.format(
                  cartItems.find(
                    cartItem =>
                      cartItem.productId === product.node.frontmatter.id
                  ).quantity * product.node.frontmatter.price
                )}
              </StyledTableCell>
              <StyledTableCell
                onClick={() => removeItem(product.node.frontmatter.id)}
                clickable
              >
                &#11199;
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

CartTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
  cartItems: PropTypes.arrayOf(PropTypes.shape()),
  removeItem: PropTypes.func,
};

export default CartTable;
