import { Skeleton } from "@mui/material";
import styled from "styled-components";

function BoxCardLoader({ arraySize = 1 }) {
    return (
        <LoaderStyled>
            {Array(arraySize)
                .fill(null)
                .map((_, index) => {
                    const isLastItem = index === arraySize - 1;

                    return (
                        <BoxCardLoaderStyled isLastItem={isLastItem}>
                            {/* <Skeleton variant="circular" width={40} height={40} /> */}
                            <Skeleton
                                variant="text"
                                sx={{ fontSize: "3rem", width: "100%" }}
                            />
                        </BoxCardLoaderStyled>
                    );
                })}
        </LoaderStyled>
    );
}

export default BoxCardLoader;

const LoaderStyled = styled.div`
  width: 90%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
`;

const BoxCardLoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
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
