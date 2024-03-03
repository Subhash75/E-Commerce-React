import { SeeDetailsContainerStyled } from "./SeeDetails.styled";
import BottomSection from "./components/BottomSection";
import TopSection from "./components/TopSection";
import useSeeDetails from "./useSeeDetails";

function SeeDetails() {
    const {
        control,
        singleProduct,
        categorizedProducts,
        isCategorizedProductsFetching,
        isCategorizedProductsError,
        allProducts,
        isAllProductsFetching,
    } = useSeeDetails();

    return (
        <SeeDetailsContainerStyled singleProduct={singleProduct}>
            <TopSection singleProduct={singleProduct} />
            <BottomSection
                control={control}
                categorizedProducts={categorizedProducts}
                isCategorizedProductsFetching={isCategorizedProductsFetching}
                isCategorizedProductsError={isCategorizedProductsError}
                allProducts={allProducts}
                isAllProductsFetching={isAllProductsFetching}
            />
        </SeeDetailsContainerStyled>
    );
}

export default SeeDetails;
