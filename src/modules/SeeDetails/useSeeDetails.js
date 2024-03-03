import { useGetProductByCategoryQuery, useGetProductByIdQuery } from "api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

function useSeeDetails() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { control } = useForm();

    const isIdPresent = searchParams.get("id");
    const isCategoryPresent = searchParams.get("category");

    const allCategories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ].filter(value => value !== isCategoryPresent);

    if (!isIdPresent || !isCategoryPresent) {
        Swal.fire({
            text: "An error has occurred. You will be redirected to Products Page",
            icon: "warning",
            confirmButtonText: "OK",
            confirmButtonColor: "rgb(30, 42, 168)",
            reverseButtons: true,
            focusConfirm: false,
            allowOutsideClick: false,
            focusCancel: false,
            scrollbarPadding: false,
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/products");
            }
        });
    }

    const {
        data: singleProduct,
        error: isSingleProductError,
        isFetching: isSingleProductFetching,
    } = useGetProductByIdQuery(isIdPresent, { skip: !isIdPresent });

    const {
        data: categorizedProducts,
        error: isCategorizedProductsError,
        isFetching: isCategorizedProductsFetching,
    } = useGetProductByCategoryQuery({ categories: [isCategoryPresent] }, {
        skip: !isCategoryPresent,
    });

    const {
        data: allProducts,
        isFetching: isAllProductsFetching
    } = useGetProductByCategoryQuery({ categories: allCategories }, {
        skip: !allCategories.length
    })

    return { control, singleProduct, categorizedProducts, allProducts, isAllProductsFetching, isCategorizedProductsFetching, isCategorizedProductsError }
}

export default useSeeDetails;
