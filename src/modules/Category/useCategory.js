import { useGetAllCategoriesQuery } from "api";
import { setCategorySelectedAction } from "globalSlice.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function useCategory() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoriesSubmitLoading, setIsCategoriesSubmitLoading] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: categories,
    isFetching: isCategoriesFetching,
    error: isCategoriesError,
    refetch,
  } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (isCategoriesError) {
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
          refetch();
        }
      });
    }
  }, [isCategoriesError, refetch]);

  const handleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleBackButtonRedirection = () => {
    navigate("/");
  };

  const handleCategoriesSubmit = async () => {
    //mocking api behaviour
    try {
      setIsCategoriesSubmitLoading(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000); //math.random to create better dynamic real time delay
      });

      //dispatch the selected category state to redux so that its available globally
      dispatch(setCategorySelectedAction(selectedCategory));

      if (selectedCategory === "All") {
        navigate("/products");
      } else {
        navigate(`/products?category=${selectedCategory}`);
      }
    } finally {
      setIsCategoriesSubmitLoading(false); //to reset state
    }
  };

  return {
    categories,
    isCategoriesFetching,
    isCategoriesError,
    handleBackButtonRedirection,
    handleCategorySelection,
    selectedCategory,
    isCategoriesSubmitLoading,
    handleCategoriesSubmit,
  };
}

export default useCategory;
