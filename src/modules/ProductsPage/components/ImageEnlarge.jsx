import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function ImageEnlarge({ url, handleEnlargedToggle }) {
    return (
        <ImageEnlargeStyled>
            <CloseButton onClick={handleEnlargedToggle}>
                <CloseIcon />
            </CloseButton>
            <img src={url} alt="enlarged_img" />
        </ImageEnlargeStyled>
    )
}

export default ImageEnlarge;

const ImageEnlargeStyled = styled.div`
background-color: #fff;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 600px;
height: 400px;
padding: 20px;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
img {
    width: 100%;
    height: 75%;
    object-fit: contain
}
`

const CloseButton = styled.button`
align-self: flex-end;
  border: none;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
  svg {
    font-size: 20px !important;
  }
`;