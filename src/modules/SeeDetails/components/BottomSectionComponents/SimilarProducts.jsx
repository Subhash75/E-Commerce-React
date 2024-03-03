import ProductCardSkeleton from "components/Loaders/ProductCardSkeleton";
import ProductCard from "components/ProductCard";
import { SimilarProductsStyled } from "modules/SeeDetails/SeeDetails.styled";
import { useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SimilarProducts({
    categorizedProducts,
    isCategorizedProductsFetching,
    control,
}) {
    const groupedData = [];
    for (let i = 0; i < categorizedProducts?.length; i += 2) {
        groupedData.push([categorizedProducts?.[i], categorizedProducts?.[i + 1]]);
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = () => {
        setActiveIndex(prevVal => {
            if (prevVal === 0) {
                return groupedData.length - 1
            } else {
                return prevVal - 1
            }
        })
    }
    const handleNext = () => {
        setActiveIndex(prevVal => {
            if (prevVal === groupedData.length - 1) {
                return 0
            } else {
                return prevVal + 1
            }
        })
    }

    return (
        <SimilarProductsStyled activeIndex={activeIndex}>
            {isCategorizedProductsFetching || categorizedProducts?.length ? <h2>Similar Products</h2> : <></>}
            {isCategorizedProductsFetching ? (
                <div className="similar_product_loader_container">
                    {Array(3)
                        .fill(null)
                        .map(() => (
                            <ProductCardSkeleton />
                        ))}
                </div>
            ) : (
                <>
                    {Array.isArray(categorizedProducts) && categorizedProducts?.length ? (
                        <div className="similar_products">
                            {groupedData.map((productArray) => {
                                return <div className="product_container" >
                                    {productArray.map(product => {
                                        return (
                                            <div key={product.id} >
                                                <ProductCard product={product} control={control} />
                                            </div>
                                        );
                                    })}
                                </div>
                            })}
                            <div className="btn left_btn" onClick={handlePrevious}><NavigateBeforeIcon /></div>
                            <div className="btn right_btn" onClick={handleNext}><KeyboardArrowRightIcon /></div>
                        </div>
                    ) : null}
                </>
            )}
        </SimilarProductsStyled>
    );
}

export default SimilarProducts;
