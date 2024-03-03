import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { ProductBenefitsStyled } from 'modules/SeeDetails/SeeDetails.styled';

function ProductBenefits() {
    return (
        <ProductBenefitsStyled>
            <p><SentimentVerySatisfiedIcon /> Customer Satisfaction</p>
            <p><LocalShippingOutlinedIcon /> Free Delivery</p>
            <p><AssignmentReturnOutlinedIcon /> 7 Days Return Policy</p>
            <p><MoneyIcon /> Pay on Delivery</p>
        </ProductBenefitsStyled>
    )
}

export default ProductBenefits