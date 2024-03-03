import { Modal, Rating, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import {
    setAddShortlistProductsAction,
    setRemoveShortlistProductsAction,
} from "globalSlice.slice";
import { useNavigate } from "react-router-dom";
import Checkbox from "./Form/Checkbox";
import styled from "styled-components";
import { useState } from "react";
import ImageEnlarge from "modules/ProductsPage/components/ImageEnlarge";

function ProductCard({
    product,
    isLastValue,
    control,
    isProductsPage,
    isCrossSellPage,
}) {
    const [isEnlarged, setEnlarged] = useState({ state: false, url: "" });

    const { shortlistedProducts } = useSelector((state) => state.globalSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEnlargedToggle = ({ url = "" }) => {
        setEnlarged((prev) => ({ state: !prev.state, url }));
    };

    const shortlistedProductsID = shortlistedProducts?.map(
        (shortlistedProduct) => shortlistedProduct.id
    );

    const handleRemoveShortlist = ({ productID }) => {
        const shortlistedProductsAfterFilter = shortlistedProducts?.filter(
            (shortlistedProduct) => shortlistedProduct.id !== productID
        );

        dispatch(setRemoveShortlistProductsAction(shortlistedProductsAfterFilter));
    };

    const handleShortlistProduct = ({ product }) => {
        const productToAdd = {
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            rating: product.rating.rate,
            category: product.category,
        };

        dispatch(setAddShortlistProductsAction(productToAdd));
    };

    const handleSeeDetailsNavigation = ({ id, category }) => {
        navigate(`/see-details?id=${id}&category=${category}`);
    };

    return (
        <>
            <CardContainerStyled
                key={product.id}
                isLastValue={isLastValue}
                isProductsPage={isProductsPage}
                isCrossSellPage={isCrossSellPage}
            >
                {shortlistedProductsID.includes(product.id) ? (
                    <Tooltip title="Remove from shortlist" placement="bottom" arrow>
                        <BookmarkAddedIcon
                            onClick={() => handleRemoveShortlist({ productID: product.id })}
                        />
                    </Tooltip>
                ) : (
                    <Tooltip title="Add to shortlist" placement="bottom" arrow>
                        <BookmarkBorderIcon
                            onClick={() => handleShortlistProduct({ product })}
                        />
                    </Tooltip>
                )}
                <Tooltip title="Click to enlarge" placement="right" arrow>
                    <img
                        src={product.image}
                        alt={product.title}
                        onClick={() => handleEnlargedToggle({ url: product.image })}
                    />
                </Tooltip>
                <h3>{product.title}</h3>
                <div className="price_rating_container">
                    <p>
                        Price: <b>₹{Math.floor(product.price)}</b>
                    </p>
                    <Rating name="read-only" value={product.rating.rate} readOnly />
                </div>
                <p className="product_category">
                    Category: <b>{product.category}</b>
                </p>
                <div className="card_footer">
                    {isProductsPage && (
                        <Checkbox
                            name={`cart.${product.id}`}
                            label="Add to cart"
                            checkboxFirst={false}
                            control={control}
                        />
                    )}
                    <p
                        className="see_details"
                        onClick={() =>
                            handleSeeDetailsNavigation({
                                id: product.id,
                                category: product.category,
                            })
                        }
                    >
                        See Details &gt;
                    </p>
                </div>
            </CardContainerStyled>
            <Modal
                open={isEnlarged.state}
                onClose={handleEnlargedToggle}
                sx={{
                    //for some unknown reasons mui default backdrop bg alpha value was not working
                    ".MuiModal-backdrop": {
                        background: "rgba(0, 0,0, 0.05)",
                    },
                }}
            >
                <ImageEnlarge
                    url={isEnlarged.url}
                    handleEnlargedToggle={handleEnlargedToggle}
                />
            </Modal>
        </>
    );
}

export default ProductCard;

const CardContainerStyled = styled.div`
  width: ${(props) =>
        props.isProductsPage
            ? "25%"
            : `${props.isCrossSellPage ? "285px" : "400px"}`};
  height: ${(props) =>
        props.isProductsPage
            ? "auto"
            : `${props.isCrossSellPage ? "285px" : "200px"}`};
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
