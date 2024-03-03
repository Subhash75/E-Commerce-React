import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "components/ErrorMsg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ProductDeliveryStyled } from "modules/SeeDetails/SeeDetails.styled";
import { useState } from "react";
import BubbleLoader from "components/Loaders/BubbleLoader";

function ProductDelivery() {
    const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const yupValidate = yup.object({
        pincode: yup
            .string()
            .required("Please enter valid picode")
            .min(6, "Minimum 6 characters")
            .max(6, "Maximum 6 characters")
            .test("pincode", "Invalid Pincode", (value, ctx) => {
                if (/^0+|[^0-9]/g.test(value)) {
                    return ctx.createError({ message: "Invalid Pincode" });
                }
                return true;
            }),
    });

    const {
        register,
        trigger,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(yupValidate),
        mode: "onBlur",
        reValidateMode: "all",
    });

    const handlePincode = async () => {
        let validationPassed = await trigger("pincode");
        if (!validationPassed) {
            return;
        }

        try {
            setIsLoading(true);
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
        } finally {
            setIsLoading(false);
        }

        setShowDeliveryInfo(true);
    };

    return (
        <ProductDeliveryStyled>
            <p>
                <LocalShippingOutlinedIcon fontSize="20" />
                Delivery
            </p>
            {!showDeliveryInfo ? <div className="pincode_input_container">
                <div className="input_container">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        {...register("pincode")}
                    />
                </div>
                <button onClick={handlePincode}>
                    {isLoading ? (
                        <>
                            Checking <BubbleLoader />
                        </>
                    ) : (
                        "Check"
                    )}
                </button>
            </div>
                : <div className="pincode_available">
                    <p>
                        Item is available at {watch("pincode")} <b onClick={() => setShowDeliveryInfo(false)}>Change</b>
                    </p>
                    <ul>
                        <li>
                            <p>
                                Delivery in 2-3 days <b>Free</b>
                            </p>
                        </li>
                        <li>
                            <p>Cash on Delivery also available for this location</p>
                        </li>
                    </ul>
                </div>}
            {errors?.pincode?.message && (
                <ErrorMsg message={errors.pincode.message} top="75px" left="5px" />
            )}
        </ProductDeliveryStyled>
    );
}

export default ProductDelivery;
