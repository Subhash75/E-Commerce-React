import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProductCardSkeleton from "components/Loaders/ProductCardSkeleton";
import ProductCard from "components/ProductCard";
import {
    CrossSellContainerStyled,
    JumpSlideStyled,
} from "modules/SeeDetails/SeeDetails.styled";
import { useEffect, useRef, useState } from "react";

function CrossSell({ allProducts, isAllProductsFetching, control }) {
    const groupedData = [];
    for (let i = 0; i < allProducts?.length; i += 3) {
        groupedData.push([
            allProducts?.[i],
            allProducts?.[i + 1],
            allProducts?.[i + 2],
        ]);
    }

    const [activeIndex, setActiveIndex] = useState(0);
    let timeoutRef = useRef();

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => clearTimeout(timeoutRef.current);
    });

    const handlePrevious = () => {
        setActiveIndex((prevVal) => {
            if (prevVal === 0) {
                return groupedData.length - 1;
            } else {
                return prevVal - 1;
            }
        });
    };
    const handleNext = () => {
        setActiveIndex((prevVal) => {
            if (prevVal === groupedData.length - 1) {
                return 0;
            } else {
                return prevVal + 1;
            }
        });
    };

    return (
        <CrossSellContainerStyled activeIndex={activeIndex} >
            {isAllProductsFetching || allProducts?.length ? (
                <h2>You might also be interested in</h2>
            ) : (
                <></>
            )}
            {isAllProductsFetching ? (
                <div className="crossSell_loader_container">
                    {Array(3)
                        .fill(null)
                        .map(() => (
                            <ProductCardSkeleton />
                        ))}
                </div>
            ) : (
                <>
                    {Array.isArray(allProducts) && allProducts?.length ? (
                        <div className="crossSell">
                            {groupedData.map((productArray) => {
                                return (
                                    <div className="product_container">
                                        {productArray.filter(Boolean).map((product) => {
                                            return (
                                                <div key={product.id}>
                                                    <ProductCard
                                                        product={product}
                                                        control={control}
                                                        isCrossSellPage={true}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                            <div className="btn left_btn" onClick={handlePrevious}>
                                <NavigateBeforeIcon />
                            </div>
                            <div className="btn right_btn" onClick={handleNext}>
                                <KeyboardArrowRightIcon />
                            </div>
                            <div className="jump_slide_container">
                                {groupedData.filter(Boolean).map((_, index) => {
                                    return (
                                        <JumpSlideStyled
                                            isActive={activeIndex === index}
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <span></span>
                                        </JumpSlideStyled>
                                    );
                                })}
                            </div>
                        </div>
                    ) : null}
                </>
            )}
        </CrossSellContainerStyled>
    );
}

export default CrossSell;
