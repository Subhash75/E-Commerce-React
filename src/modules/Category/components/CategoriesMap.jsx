import styled from "styled-components";

function CategoriesMap({ categories }) {
    if (Array.isArray(categories)) {
        return (
            <>
                {categories.map((category) => {

                    return (
                        <IndividualCategoryStyled >
                            {category}
                        </IndividualCategoryStyled>
                    );
                })}
                <IndividualCategoryStyled>All</IndividualCategoryStyled>
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
  border: 0.25px solid rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  border-radius: 4px;
  width: 27%;
  height: 100px;
  ${({ isLastItem }) =>
        isLastItem &&
        `
  margin: auto;
`}
`;
