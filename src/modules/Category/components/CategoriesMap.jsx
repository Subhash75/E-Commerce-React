import styled from "styled-components";

function CategoriesMap({
    categories,
    selectedCategory,
    handleCategorySelection,
}) {
    if (Array.isArray(categories)) {
        return (
            <>
                {categories.map((category) => {
                    return (
                        <IndividualCategoryStyled
                            isCategorySelected={
                                category.toLowerCase() === selectedCategory.toLowerCase()
                            }
                            onClick={() => handleCategorySelection(category)}
                        >
                            {category}
                        </IndividualCategoryStyled>
                    );
                })}
                <IndividualCategoryStyled
                    isCategorySelected={selectedCategory === "All"}
                    onClick={() => handleCategorySelection("All")}
                >
                    All
                </IndividualCategoryStyled>
            </>
        );
    }
    return null;
}

export default CategoriesMap;

const IndividualCategoryStyled = styled.p`
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
  font-family: Montserrat-SemiBold;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  border: ${(props) =>
        props.isCategorySelected
            ? "solid rgb(30, 42, 168)"
            : "0.25px solid rgba(0, 0, 0, 0.25)"};
  padding: 10px 20px;
  border-radius: 4px;
  width: 27%;
  height: 100px;
  ${({ isLastItem }) =>
        isLastItem &&
        `
  margin: auto;
`}
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  }
`;
