import { useGetAllCategoriesQuery } from "api";

function useCategory() {
    const { data: categories, isFetching: isCategoriesFetching, error } = useGetAllCategoriesQuery();
    console.log({ categories, isCategoriesFetching, error })
    return { categories, isCategoriesFetching }
}

export default useCategory;