import { TopSectionStyled } from "../SeeDetails.styled"
import ProductDetails from "./TopSectionComponents/ProductDetails"
import ProductImage from "./TopSectionComponents/ProductImage"

function TopSection({ singleProduct }) {
    return (
        <TopSectionStyled>
            <ProductImage singleProduct={singleProduct} />
            <ProductDetails singleProduct={singleProduct} />
        </TopSectionStyled>
    )
}

export default TopSection