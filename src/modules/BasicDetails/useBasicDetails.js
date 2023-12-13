import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function useBasicDetails() {
    const navigate = useNavigate();
    const [isBasicDetailsLoading, setIsBasicDetailsLoading] = useState();

    const yupValidate = yup.object({
        name: yup.string().required("Name is required"),
        mobile_number: yup
            .string()
            .required("Mobile Number is required")
            .matches(/^[6-9][0-9]{9}$/, "Invalid mobile number"),
        email: yup
            .string()
            .required("Email is required")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
                "Please enter valid Email"
            ),
        state: yup.string().required("State is required"),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "Subhash Ghosh",
            mobile_number: "9876543210",
            email: "subhash.ghosh@test.com",
            state: "Maharashtra",
        },
        resolver: yupResolver(yupValidate),
        mode: "all",
        reValidateMode: "all",
    });

    const handleBasicDetailsSubmit = async () => {
        //mocking api behaviour
        try {
            setIsBasicDetailsLoading(true);
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000); //math.random to create better dynamic real time delay
            });

            navigate("/category");
        } finally {
            setIsBasicDetailsLoading(false); //to reset state
        }
    };

    return { control, handleSubmit, handleBasicDetailsSubmit, errors, isBasicDetailsLoading };
}

export default useBasicDetails;
