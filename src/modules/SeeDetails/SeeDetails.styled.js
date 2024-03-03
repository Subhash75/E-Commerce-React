import styled, { keyframes } from "styled-components";

const squishAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;

export const SeeDetailsContainerStyled = styled.div`
  margin-top: 60px;
  padding: 20px;
`
export const ProductDetailsContainerStyled = styled.div`
display: flex;
`

export const TopSectionStyled = styled.div`
display: flex;
gap: 25px;
`

export const ProductImageStyled = styled.div`
border: solid #e4e4e4;
border-radius: 4px;
flex: 1 0 40%;
text-align: center;
height: fit-content;
position: sticky;
top: 10px;
img {
  width: 75%;
  height: 450px;
  object-fit: contain;
}
`

export const ProductDetailsStyled = styled.div`
flex: 1 0 55%;
display: flex;
gap: 10px;
`

export const ProductDetailedInfoStyled = styled.div`
flex: 1 0 65%;
h1 {
  font-family: Montserrat-SemiBold;
  margin: 10px 0
}
.top_rated_text {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color:  rgba(30, 42, 168, .75)
}
.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 5px;
  border-bottom: .25px solid #000 !important;
  margin-bottom: 5px;
  b{
     margin-left: auto;
  }
}
.price_container{
  p:first-of-type {
    margin: 0;
    display: flex;  
    align-items: center;
    font-size: 1.5rem;
    font-weight: 300;
    color: #CC0C39;
    sup {
      margin-left: 10px;
      margin-right: 2px;
      font-size: 1.1rem;
      color: #000;
    }
    b {
      color: #000;
      font-size: 2rem;
    }
  }
  p:last-of-type {
    margin: 5px 0;
    font-size: 0.75rem;
    color: rgba(0, 0 ,0 , 0.75);
    font-weight: 600;
  }
}  
.offer_section {
  & > p {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 15px;
    svg {
      margin-top: 2px;
    }
  }
  .normal_more_offer_text {
    font-weight: 400 !important;
    p {
      margin: 0
    }
    b {
      color: rgba(30, 42, 168, 1)
    }
  }
  .more_text {
    cursor: pointer;
    color: rgba(30, 42, 168, 1)
  }
  & > div {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
    svg {
      margin-top: 5px;
    }
    p {
      margin: 0;
      b {
        color: rgba(30, 42, 168, 1)
      }
    }
  }
}
 `
export const ProductAsideCardStyled = styled.div`
flex: 1 0 30%;
height: 300px;
border: solid;
position: sticky;
top: 10px;
`

export const ProductAccordionStyled = styled.div`
h3 {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    & > * {
      width: 50%;
    }
    p {
      margin: 0;
    }
  }
  .additional_details_li {
    margin-bottom: 10px
  }
}
`

export const ProductBenefitsStyled = styled.div`
p {
  display: flex;
    gap: 25px;
    color:  rgba(30, 42, 168, .75);
    font-weight: 700
}
`

export const ProductDeliveryStyled = styled.div`
position: relative;
& > p {
  margin: 0;
  width: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 15px;
  svg {
    margin-top: 2px;
  }
}
& > .pincode_input_container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  button {
    all: unset;
    padding: 10px 43px;
    display: flex;
    gap: 10px;
    margin-top: 7px;
    background-color: rgb(30, 42, 168);
    color: #fff;
    border-radius: 5px;
    border: .25px solid transparent;
    cursor: pointer;
  }
}
.input_container {
  margin-top: 10px;
  border-radius: 5px;
  border: .5px solid rgba(0, 0, 0, 0.75);
  padding: 7px 15px;
  display: flex;
  align-items: center;
  width: fit-content;
  input, input:focus {
    border: 0;
    outline: 0;
    padding-left: 10px;
  }
}

.pincode_available {
  & > p:first-child b {
    text-decoration: underline;
    margin-left: 5px;
    color: rgb(30, 42, 168);
    cursor: pointer
  }
  ul {
    font-size: 14px;
    padding-left: 25px;
    p {
      margin: 10px 0
    }
  }
}

`

export const BottomSectionStyled = styled.div`

`

export const SimilarProductsStyled = styled.div`
margin: 50px 0;
.similar_product_loader_container {
  display: flex;
  gap: 10px;
  justify-content: space-between
}
.product_container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  gap: 50px;
  flex-shrink: 0;
  transform: translateX(-${props => props.activeIndex * 100}%);
}
.similar_products {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  .btn {
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    svg {
      font-size: 50px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      svg {
        animation: ${squishAnimation} 0.3s ease-in-out
      }
    }
  }
  .left_btn {
    left: 0;
  }
  .right_btn {
    right: 0;
  }
}
`

export const CrossSellContainerStyled = styled.div`
margin: 50px 0;
.crossSell_loader_container {
  display: flex;
  gap: 10px;
  justify-content: space-between
}
.product_container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  gap: 50px;
  flex-shrink: 0;
  transform: translateX(-${props => props.activeIndex * 100}%);
}
.crossSell {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  padding: 50px 0;
  .btn {
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    svg {
      font-size: 50px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      svg {
        animation: ${squishAnimation} 0.3s ease-in-out
      }
    }
  }
  .left_btn {
    left: 0;
  }
  .right_btn {
    right: 0;
  }
  .jump_slide_container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
    align-items: center;
 }
}
`

export const JumpSlideStyled = styled.div`
  width: ${props => props.isActive ? "10px" : '6px'};
  height: ${props => props.isActive ? "10px" : '6px'};
  border-radius: 50%;
  border: solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  span {   
    width: 5px;
    height: 5px;
    display: ${props => props.isActive ? "inline-block" : 'none'};
    background-color: #000;
    border-radius: 50%;
  }
`