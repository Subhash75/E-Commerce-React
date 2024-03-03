import { BottomSectionStyled } from "../SeeDetails.styled";
import CrossSell from "./BottomSectionComponents/CrossSell";
import SimilarProducts from "./BottomSectionComponents/SimilarProducts";

function BottomSection({
    control,
    categorizedProducts,
    allProducts,
    isAllProductsFetching,
    isCategorizedProductsFetching,
    isCategorizedProductsError,
}) {
    return (
        <BottomSectionStyled>
            {!isCategorizedProductsError ? (
                <SimilarProducts
                    control={control}
                    categorizedProducts={categorizedProducts}
                    isCategorizedProductsFetching={isCategorizedProductsFetching}
                    allProducts={allProducts}
                    isAllProductsFetching={isAllProductsFetching}
                />
            ) : (
                <></>
            )}
            <CrossSell
                control={control}
                allProducts={allProducts}
                isAllProductsFetching={isAllProductsFetching}
            />
        </BottomSectionStyled>
    );
}

export default BottomSection;
