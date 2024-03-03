import BoxCardLoader from "components/Loaders/BoxCardLoader";
import useCategory from "./useCategory";
import styled from "styled-components";
import BGImage from "../../assets/images/bg.jpg";
import CategoriesMap from "./components/CategoriesMap";
import { Button } from "@mui/material";
import BubbleLoader from "components/Loaders/BubbleLoader";

function Category() {
    const {
        categories,
        isCategoriesFetching,
        isCategoriesError,
        handleBackButtonRedirection,
        handleCategorySelection,
        selectedCategory,
        isCategoriesSubmitLoading,
        handleCategoriesSubmit,
    } = useCategory();

    if (isCategoriesFetching)
        return (
            <CategoryStyled>
                <BoxCardLoader arraySize={4} />
            </CategoryStyled>
        );
    else if (isCategoriesError) return null;

    return (
        <CategoryStyled>
            <CategoryContainerStyled>
                <h2>Select Category</h2>
                <CategoriesMap
                    categories={categories}
                    handleCategorySelection={handleCategorySelection}
                    selectedCategory={selectedCategory}
                />
                <ButtonContainerStyled>
                    <Button
                        variant="contained"
                        onClick={handleBackButtonRedirection}
                        sx={{
                            border: "solid rgb(30, 42, 168)",
                            background: "#fff",
                            color: "rgb(30, 42, 168)",
                            boxShadow: "none",
                            width: "50%",
                            "&:hover": {
                                background: "#fff",
                                border: "solid rgb(30, 42, 168)",
                                color: "rgb(30, 42, 168)",
                            },
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        onClick={handleCategoriesSubmit}
                        variant="contained"
                        sx={{
                            background: "rgb(30, 42, 168)",
                            width: "50%",
                            "&:hover ": { background: "rgb(30, 42, 168)" },
                        }}
                    >
                        {isCategoriesSubmitLoading ? (
                            <>
                                Proceeding <BubbleLoader />
                            </>
                        ) : (
                            "Proceed"
                        )}
                    </Button>
                </ButtonContainerStyled>
            </CategoryContainerStyled>
        </CategoryStyled>
    );
}

export default Category;

const ButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const CategoryStyled = styled.div`
  padding: 0 20px;
  height: 100vh;
  background: url(${BGImage}) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryContainerStyled = styled.div`
  margin-top: 50px;
  padding: 20px;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  h2 {
    width: 100%;
    font-family: Montserrat-SemiBold;
    text-align: center;
  }
`;
