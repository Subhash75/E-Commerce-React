import { ProductImageStyled } from "modules/SeeDetails/SeeDetails.styled";

function ProductImage({ singleProduct }) {
    const { image: productImage } = singleProduct || {};

    return (
        <ProductImageStyled>
            <img src={productImage} alt="product" />
        </ProductImageStyled>
    )
}

export default ProductImage