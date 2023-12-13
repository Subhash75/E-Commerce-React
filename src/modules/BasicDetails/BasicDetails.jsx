import { Button, Grid } from "@mui/material";
import Input from "components/Form/Input";
import Select from "components/Form/Select";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import BGImage from "../../assets/images/bg.jpg";
import indianStates from "./BasicDetails.constants";
import Gender from "./Gender";
import useBasicDetails from "./useBasicDetails";
import ErrorMsg from "components/ErrorMsg";
import BubbleLoader from "components/Loaders/BubbleLoader";

function BasicDetails() {
    const {
        control,
        handleSubmit,
        handleBasicDetailsSubmit,
        errors,
        isBasicDetailsLoading,
    } = useBasicDetails();

    return (
        <BasicDetailsStyled onSubmit={handleSubmit(handleBasicDetailsSubmit)}>
            <div className="login">
                <div>
                    <h2> Welcome aboard!</h2>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item md={12} my={1.5}>
                            <Gender />
                        </Grid>
                        <Grid item sx={{ position: "relative" }} md={6} my={2}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <Input id="name" label="Name" variant="outlined" {...field} />
                                )}
                            />
                            {!!errors?.name && <ErrorMsg message={errors.name.message} />}
                        </Grid>
                        <Grid item sx={{ position: "relative" }} md={6} my={2}>
                            <Controller
                                name="mobile_number"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id="mobile_number"
                                        label="Mobile Number"
                                        maxLength="10"
                                        variant="outlined"
                                        {...field}
                                    />
                                )}
                            />
                            {!!errors?.mobile_number && (
                                <ErrorMsg message={errors.mobile_number.message} />
                            )}
                        </Grid>
                        <Grid item sx={{ position: "relative" }} md={6} my={2}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input
                                        id="email"
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        {...field}
                                    />
                                )}
                            />
                            {!!errors?.email && <ErrorMsg message={errors.email.message} />}
                        </Grid>
                        <Grid item sx={{ position: "relative" }} md={6} my={2}>
                            <Select
                                name="state"
                                label="State"
                                options={indianStates}
                                control={control}
                            />
                            {!!errors?.state && <ErrorMsg message={errors.state.message} />}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{ background: "rgb(30, 42, 168)", marginTop: "25px" }}
                    >
                        {isBasicDetailsLoading ? (
                            <>
                                Proceeding <BubbleLoader />
                            </>
                        ) : (
                            "Proceed"
                        )}
                    </Button>
                </div>
            </div>
        </BasicDetailsStyled>
    );
}

export default BasicDetails;

const BasicDetailsStyled = styled.form`
  width: 100%;
  height: 100vh;
  background: url(${BGImage}) no-repeat;
  background-size: 100% 100%;
  display: flex;
  h2 {
    font-family: Montserrat-SemiBold;
    text-align: center;
  }
  & > div {
    flex: 1 0 50%;
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      border-radius: 10px;
      padding: 15px;
      background: #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
      & > p:last-of-type > span {
        color: rgb(30, 42, 168);
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  fieldset {
    label {
      margin-right: 10px;
    }
  }
  fieldset > div:first-of-type {
    flex-direction: row;
  }
`;
