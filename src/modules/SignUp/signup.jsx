import { useState } from "react";
import styled from "styled-components"
import { TextField, IconButton, Grid, Button, InputAdornment, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BGImage from "../../utils/bg.jpg"

function Signup() {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };


    return (
        <LoginStyled>
            <div className="login">
                <div>
                    <h2> Welcome aboard! Dive into the experience and discover more.</h2>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item lg={6}><TextField id="outlined-basic" fullWidth label="Name" variant="outlined" /></Grid>
                        <Grid item lg={6}><TextField id="outlined-basic" fullWidth label="Contact Number" variant="outlined" /></Grid>
                        <Grid item lg={6}><TextField id="outlined-basic" fullWidth label="Email" type="email" variant="outlined" />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item lg={6}><TextField id="outlined-basic" fullWidth label="City" variant="outlined" /></Grid>
                        <Grid item lg={6}><TextField id="outlined-basic" fullWidth label="Age" variant="outlined" /></Grid>
                        <Grid item lg={12}>

                            <FormControl component="fieldset">
                                <FormLabel component="label">Select Gender:</FormLabel>
                                <RadioGroup
                                    aria-label="radio-group"
                                    name="radio-group"
                                    value={selectedValue}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="others"
                                        control={<Radio />}
                                        label="Others"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button variant="contained" style={{ background: "rgb(30, 42, 168)", marginTop: "25px" }} >SIGN UP</Button>
                </div>
            </div>
        </LoginStyled>
    )
}

export default Signup

const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${BGImage}) no-repeat;
  background-size: 100% 100%;
  display: flex;
  & > div {
    flex: 1 0 50%;
  }
  .login {
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      width: 80%;
      border-radius: 10px;
      padding: 15px;
      background: #fff; 
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
      & > p:last-of-type > span {
        color: rgb(30, 42, 168);
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  fieldset {
      width: 100%;
      align-items: center;
      flex-direction: row;
      label {
        margin-right: 10px;
      }

  }
  fieldset > div:first-of-type {
    flex-direction: row;
  }
`