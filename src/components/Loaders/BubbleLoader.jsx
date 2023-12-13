import styled, { keyframes } from "styled-components";

function BubbleLoader() {
    return (
        <LoaderDiv>
            <div>
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </LoaderDiv>
    );
}

const bounceDelay = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoaderDiv = styled.div`
  cursor: text;
  transition: all 0.15s linear;
  border-radius: 15px;
  color: #000000;
  font-size: ${({ theme: { fontSize } }) =>
        fontSize ? `calc(18px + ${fontSize - 92}%)` : "18px"};
  border: none;
  box-shadow: 1px 5px 14px 0px rgb(0 0 0 / 10%);
  margin: 0 6px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > div > div {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;
  }

  & > div .bounce1 {
    animation-delay: -0.32s;
  }

  & > div .bounce2 {
    animation-delay: -0.16s;
  }
`;

export default BubbleLoader;
