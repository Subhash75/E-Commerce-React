import { Skeleton } from "@mui/material"
import styled from "styled-components"

function ProductCardSkeleton() {
    return (
        <ProductCardSkeletonStyled>
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton
                variant="text"
                sx={{ fontSize: "3rem", width: "75%" }}
            />
            <hr />
            <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
            />
            <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "100%" }}
            />

        </ProductCardSkeletonStyled>
    )
}

export default ProductCardSkeleton

const ProductCardSkeletonStyled = styled.div`
width: 25%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 0.25px solid #e4e4e4;
padding: 25px;
`