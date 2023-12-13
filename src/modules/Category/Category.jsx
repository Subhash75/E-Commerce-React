import BoxCardLoader from "components/Loaders/BoxCardLoader";
import useCategory from "./useCategory";
import styled from "styled-components";
import BGImage from "../../assets/images/bg.jpg";
import CategoriesMap from "./components/CategoriesMap";

function Category() {
    const { categories, isCategoriesFetching } = useCategory();

    return (
        <CategoryStyled>
            {isCategoriesFetching ? (
                <BoxCardLoader arraySize={4} />
            ) : (
                <CategoryContainerStyled>
                    <h2>Select Category</h2>
                    <CategoriesMap categories={categories} />
                </CategoryContainerStyled>
            )}
        </CategoryStyled>
    );
}

export default Category;

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
  padding: 20px;
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
