import styled from "styled-components";

function ErrorMsg({ message = "", top, left }) {
    return (
        <ErrorMsgStyled top={top} left={left}>
            {message}
        </ErrorMsgStyled>
    );
}

export default ErrorMsg;

const ErrorMsgStyled = styled.p`
    margin: 0;
    position: absolute;
    font-size: 10px;
    color: red;
    font-family: Montserrat-Medium;
    left: ${(props) => (props.left ? props.left : "39px")};
    top: ${(props) => (props.top ? props.top : "65px")}
}
`;
