import { TextField } from "@mui/material";

function Input({
    id,
    fullWidth = true,
    label,
    variant,
    maxLength,
    ...props
}) {
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            InputProps={{
                inputProps: {
                    maxLength: maxLength,
                },
            }}
            sx={{
                input: {
                    fontFamily: "Montserrat-SemiBold",
                },
            }}
            {...props}
        />
    );
}

export default Input;
