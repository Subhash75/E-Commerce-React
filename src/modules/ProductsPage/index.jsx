import ProductCardSkeleton from "components/Loaders/ProductCardSkeleton";
import styled from "styled-components";
import Card from "./Card";
import ProductPageHeader from "./ProductPageHeader";
import useProducts from "./useProducts";
import ScrollToTop from "./components/ScrollToTop";

function ProductsPage() {
    const {
        allFetchedProducts,
        isAllProductsFetching,
        isCategorizedProductsFetching,
        categories,
        control,
    } = useProducts();
    return (
        <>
            <ProductsPageStyled>
                {isAllProductsFetching || isCategorizedProductsFetching ? null : (
                    <ProductPageHeader categories={categories} control={control} />
                )}
                {isAllProductsFetching || isCategorizedProductsFetching ? (
                    Array(7)
                        .fill(null)
                        .map(() => <ProductCardSkeleton />)
                ) : (
                    <CardContainerStyled>
                        <Card allFetchedProducts={allFetchedProducts} control={control} />
                    </CardContainerStyled>
                )}
            </ProductsPageStyled>
            <ScrollToTop />
        </>
    );
}

export default ProductsPage;

const ProductsPageStyled = styled.div`
  margin-top: 60px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 35px;
  justify-content: center;s
`;

const CardContainerStyled = styled.div`
display: flex;
    flex-wrap: wrap;
    gap: 25px 35px;
    justify-content: space-between;
`