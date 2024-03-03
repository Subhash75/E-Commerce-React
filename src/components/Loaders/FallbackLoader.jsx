import styled, { keyframes } from "styled-components";

const FallbackLoader = () => {
    return (
        <LoadingContainer>
            <LoadingAnimation>
                <LoadingText>SwiftCart</LoadingText>
            </LoadingAnimation>
        </LoadingContainer>
    );
};

export default FallbackLoader;

const borderTracing = keyframes`
  0% {
    transform: scaleX(0);
  }

  50% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoadingAnimation = styled.div`
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 4px solid #f39c12;
    border-radius: 12px;
    animation: ${borderTracing} 2s linear infinite;
  }
`;

const LoadingText = styled.span`
  font-size: 100px;
  font-weight: bold;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(to right, #f39c12, #3498db);
`;
