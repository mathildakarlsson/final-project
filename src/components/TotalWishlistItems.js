import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';


export const TotalWishlistItems = () => {
  const productsInWishlist = useSelector((store) =>
    store.wishlist.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      {productsInWishlist === 0 ? (
        <></>
      ) : (
        <StyledTotalItems>
          <p>{productsInWishlist}</p>
         </StyledTotalItems>
      )}
    </>
  );
};

const StyledTotalItems = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  color: #6E6D6C;
`