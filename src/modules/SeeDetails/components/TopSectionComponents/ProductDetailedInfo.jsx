import { ProductDetailedInfoStyled } from "modules/SeeDetails/SeeDetails.styled";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { Rating } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useState } from "react";
import ProductAccordion from "./ProductAccordion";
import ProductBenefits from "./ProductBenefits";
import ProductDelivery from "./ProductDelivery";

const offersLoremIpsumText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sem tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sem tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sem tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut sem tellus.",
];

function ProductDetailedInfo({ singleProduct }) {
    const [showAllOffer, setShowAllOffer] = useState(false);
    const { title, price = 0, rating } = singleProduct || {};
    const randomNum = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    const randomPercentage = Math.floor(Math.random() * (75 - 10 + 1)) + 10;
    const totalAmount = (randomPercentage / 100) * price + price;

    return (
        <ProductDetailedInfoStyled>
            <p className="top_rated_text">
                <DiamondOutlinedIcon />
                <small>Top Rated</small>
            </p>
            <h1>{title}</h1>
            <p className="rating">
                {rating?.rate}
                <Rating name="read-only" value={+rating?.rate} readOnly />
                <b>{randomNum} Ratings</b>
            </p>
            <div className="price_container">
                <p>
                    -{randomPercentage}%<sup>₹</sup> <b>{Math.floor(price)}</b>
                </p>
                <p>
                    M.R.P.: <s>₹ {Math.round(totalAmount)}</s>
                </p>
            </div>
            <p>Inclusive of all Taxes</p>
            <hr />

            <div className="offer_section">
                <p>
                    <Brightness5OutlinedIcon fontSize="20" />
                    Available offers
                </p>
                {offersLoremIpsumText.map((value, index) => {
                    return (
                        <div key={index}>
                            <LocalOfferOutlinedIcon fontSize="20" />
                            <p>
                                {value} <b>T&C</b>
                            </p>
                        </div>
                    );
                })}
                <p
                    className={showAllOffer ? "normal_more_offer_text" : "more_text"}
                    onClick={showAllOffer ? null : () => setShowAllOffer(true)}
                >
                    {showAllOffer ? (
                        <>
                            <LocalOfferOutlinedIcon fontSize="20" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                ut sem tellus. <b>T&C</b>
                            </p>
                        </>
                    ) : (
                        "+1 more"
                    )}
                </p>
            </div>

            <hr />

            <ProductDelivery />

            <hr />

            <ProductBenefits />

            <hr />

            <ProductAccordion />
        </ProductDetailedInfoStyled>
    );
}

export default ProductDetailedInfo;
