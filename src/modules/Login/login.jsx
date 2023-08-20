import { useState } from "react";
import styled from "styled-components"
import { TextField, IconButton, Button, InputAdornment } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BGImage from "../../utils/bg.jpg"

function Login() {
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
      <div className="login-bg">
      </div>
      <div className="login">
        <div>
          <h1>Welcome Back</h1>
          <p>Welcome back! Please enter your details</p>
          <TextField id="outlined-basic" label="Email" type="email" variant="outlined" />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            margin="normal"
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
          <Button variant="contained" style={{ background: "rgb(30, 42, 168)", marginTop: "10px" }} >SIGN IN</Button>
          <p>Don't have an account? <span>Sign Up</span></p>
        </div>
      </div>
    </LoginStyled>
  )
}

export default Login

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
      & > p:first-of-type {
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 35px;
      }
      & > p:last-of-type > span {
        color: rgb(30, 42, 168);
        font-weight: 600;
        cursor: pointer;
      }
    }
    h1 {
        margin: 0
    }
  }
`