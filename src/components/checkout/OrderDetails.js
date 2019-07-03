import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const StyledHeading = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
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
`;

const StyledHeadTableCell = styled.td`
  padding: 15px 0;
  text-transform: uppercase;
  font-weight: 600;
`;

const OrderDetails = ({ products }) => (
  <StyledWrapper>
    <StyledHeading>Your order</StyledHeading>
    <StyledTable>
      <thead>
        <StyledTableRow>
          <StyledHeadTableCell>Product</StyledHeadTableCell>
          <StyledHeadTableCell>Price</StyledHeadTableCell>
        </StyledTableRow>
      </thead>
      <tbody>
        {products.map(product => (
          <StyledTableRow key={product.node.frontmatter.id}>
            <StyledTableCell>{product.node.frontmatter.title}</StyledTableCell>
            <StyledTableCell>{product.node.frontmatter.price}</StyledTableCell>
          </StyledTableRow>
        ))}
        <StyledTableRow>
          <StyledTableCell>Subtotal</StyledTableCell>
          <StyledTableCell>43$</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell>Shipping</StyledTableCell>
          <StyledTableCell>FREE</StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell>Total</StyledTableCell>
          <StyledTableCell>34$</StyledTableCell>
        </StyledTableRow>
      </tbody>
    </StyledTable>
  </StyledWrapper>
);

OrderDetails.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()),
};

export default OrderDetails;
