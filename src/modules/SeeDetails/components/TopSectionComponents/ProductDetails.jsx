import { ProductDetailsStyled } from 'modules/SeeDetails/SeeDetails.styled'
import ProductAsideCard from './ProductAsideCard'
import ProductDetailedInfo from './ProductDetailedInfo'

function ProductDetails({ singleProduct }) {
    return (
        <ProductDetailsStyled>
            <ProductDetailedInfo singleProduct={singleProduct} />
            <ProductAsideCard></ProductAsideCard>
        </ProductDetailsStyled>
    )
}

export default ProductDetails