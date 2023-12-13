import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function DatePickerInput({
    id,
    name,
    label,
    control,
    minDate,
    isRequired,
}) {
    return (
        <DateWrapper>
            <label>
                {label} <span style={{ color: "red" }}>{isRequired ? "*" : null}</span>
            </label>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            id={id}
                            name={name}
                            control={control}
                            minDate={minDate}
                            value={value || ""}
                            onChange={onChange}
                            format="dd/MM/yyyy"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name={name}
                                    helperText={params.error && "Please provide a valid date"}
                                />
                            )}
                        />
                    </LocalizationProvider>
                )}
            />
        </DateWrapper>
    );
}

export default DatePickerInput;

const DateWrapper = styled.div`
  position: relative;
  label {
    position: absolute;
    top: 10px;
    left: 22px;
    letter-spacing: 1px;
    font-size: 15px;
    z-index: 1;
  }
  svg {
    position: absolute;
    top: 54%;
    right: 12%;
    color: rgba(0, 0, 0, 0.5);
  }
  .MuiFormControl-root {
    width: 100%;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    input {
      cursor: pointer;
      padding-bottom: 0;
      padding-top:  25px;
      padding-left: 20px;
      color: rgba(0, 0, 0, 0.5);
    }
    & > div {
      height: 100%;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 1px 5px 14px 0px;
      border: solid transparent;
      & > fieldset {
        border: none;
      }
    }
  }
`;
