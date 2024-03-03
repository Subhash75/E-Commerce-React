import {
    useGetAllCategoriesQuery,
    useGetAllProductsQuery,
    useGetProductByCategoryQuery,
} from "api";
import { setCartAction } from "globalSlice.slice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

function useProducts() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const categoryPresent = searchParams.get("category");

    const { control, watch } = useForm({
        //rhf setvalue and reset both were not working(mui select) for some reasons hence opted for defaultvalues
        defaultValues: {
            cart: {},
            category: categoryPresent ? categoryPresent : "All"
        }
    });

    const { data: categories } = useGetAllCategoriesQuery();

    const {
        data: allProducts,
        error: isAllProductsError,
        isFetching: isAllProductsFetching,
        refetch: refetchAllProducts,
    } = useGetAllProductsQuery(null, { skip: categoryPresent });

    const {
        data: categorizedProducts,
        error: isCategorizedProductsError,
        isFetching: isCategorizedProductsFetching,
        refetch: refetchCategorizedProducts,
    } = useGetProductByCategoryQuery({ categories: [categoryPresent] }, {
        skip: !categoryPresent,
    });

    const allFetchedProducts = categoryPresent
        ? categorizedProducts
        : allProducts;

    useEffect(() => {
        if (watch('category')) {
            if (watch('category') === "All") {
                navigate('/products')
            } else {
                navigate(`/products?category=${watch('category')}`);
            }
        }
    }, [watch("category")])

    useEffect(() => {
        const itemsToAddInCart = Object.entries(watch("cart"))
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);

        dispatch(setCartAction(itemsToAddInCart))
    }, [JSON.stringify(watch("cart"))])

    useEffect(() => {
        if (isAllProductsError || isCategorizedProductsError) {
            Swal.fire({
                text: "An error has occurred. Would you like to retry?",
                icon: "warning",
                confirmButtonText: "Retry",
                confirmButtonColor: "rgb(30, 42, 168)",
                reverseButtons: true,
                focusConfirm: false,
                allowOutsideClick: false,
                focusCancel: false,
                scrollbarPadding: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    if (categoryPresent) {
                        refetchCategorizedProducts();
                    } else {
                        refetchAllProducts();
                    }
                }
            });
        }
    }, [isAllProductsError, isCategorizedProductsError]);

    return {
        allFetchedProducts,
        isAllProductsFetching,
        isCategorizedProductsFetching,
        categories,
        control,
    };
}

export default useProducts;
