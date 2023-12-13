import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import BoyImg from "../../assets/images/boy.png";
import GirlImg from "../../assets/images/girl.png";
import styled from "styled-components";

function Gender() {
    const [alignment, setAlignment] = useState("male");

    const handleChange = (_, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <GenderStyled>
            <p className="select_gender_text">Select Gender:</p>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                    "&.MuiToggleButtonGroup-root": {
                        gap: "20px",
                        flexGrow: 1
                    },
                    "&.MuiToggleButtonGroup-root button": {
                        color: "#000",
                        borderColor: "rgba(0, 0, 0 ,0.25) !important",
                        borderRadius: '4px !important',
                        flexGrow: 1
                    },
                    "& .Mui-selected": {
                        backgroundColor: 'rgb(30, 42, 168) !important',
                        color: '#fff !important'
                    },
                    "& .Mui-selected:hover": {
                        backgroundColor: 'rgb(30, 42, 168) !important',
                        color: '#fff !important'
                    }

                }}
            >
                <ToggleButton value="male">
                    <img
                        src={BoyImg}
                        alt="Male"
                        style={{ width: "24px", height: "24px", marginRight: "8px" }}
                    />
                    Male
                </ToggleButton>
                <ToggleButton value="female">
                    <img
                        src={GirlImg}
                        alt="Female"
                        style={{ width: "24px", height: "24px", marginRight: "8px" }}
                    />
                    Female
                </ToggleButton>
            </ToggleButtonGroup>
        </GenderStyled>
    );
}

export default Gender;

const GenderStyled = styled.div`
display: flex;
align-items: center;
gap: 25px;
.select_gender_text {
    margin: 0;
    font-size: 1.1rem;
    font-family: Montserrat-Medium;

}
`