import ProductCard from "components/ProductCard";
import React from "react";
import styled from "styled-components";

function Card({ allFetchedProducts, control }) {

  if (Array.isArray(allFetchedProducts)) {
    return (
      <>
        {allFetchedProducts.map((product, index) => {
          //checks last nd second last value
          // ++index % 3 !== 0 ensures last nd second last value is not multiple of 3
          const isLastValue =
            (index === allFetchedProducts.length - 1 && ++index % 3 !== 0) ||
            (index === allFetchedProducts.length - 2 && ++index % 3 !== 0);
          return (
            <>
              <ProductCard product={product} isLastValue={isLastValue} control={control} isProductsPage={true} />
            </>
          );
        })}
      </>
    );
  } else return null;
}

export default React.memo(Card);

const CardContainerStyled = styled.div`
  width: 25%;
  margin: ${(props) => (props.isLastValue ? "0 auto" : 0)};
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  padding: 10px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  }
  & > svg:first-of-type {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    color: rgb(30, 42, 168);
  }
  img {
    border-radius: 50%;
    width: 75px;
    height: 75px;
    cursor: pointer;
  }
  h3 {
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    font-family: Montserrat-SemiBold;
    margin: 10px 0;
  }
  .price_rating_container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > p {
      margin: 10px 0;
    }
  }
  .product_category {
    text-transform: capitalize;
    margin: 10px 0;
    b {
      font-family: Montserrat-SemiBold;
    }
  }
  .card_footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .see_details {
    margin: 0;
    font-size: 14px;
    text-decoration: underline;
    color: rgb(30, 42, 168);
    cursor: pointer;
    font-weight: 600;
  }
`;
