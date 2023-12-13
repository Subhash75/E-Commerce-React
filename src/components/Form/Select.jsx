import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Select = ({ name, label, options, control, ...rest }) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id={`${name}-label`}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <MuiSelect
                        labelId={`${name}-label`}
                        label={label}
                        MenuProps={{
                            style: {
                                maxHeight: 250,
                                width: 250,
                            },
                        }}
                        sx={{
                            '& div#mui-component-select-state': {
                                fontFamily: "Montserrat-SemiBold",
                            },
                        }}
                        {...field}
                        {...rest}
                    >
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                style={{
                                    fontFamily: "Montserrat-SemiBold",
                                    color: "rgb(30, 42, 168)"
                                }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </MuiSelect>
                )}
            />
        </FormControl>
    );
};

export default Select;
