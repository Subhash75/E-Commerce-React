import { Controller } from "react-hook-form";
import styled from "styled-components";

function Checkbox({
    label,
    checkboxFirst,
    control,
    name,
    onClick,
    isDisabled,
    disabled,
    defaultValue,
}) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue ? defaultValue : false}
            render={({ field }) => (
                <CheckboxStyled
                    checkboxFirst={checkboxFirst}
                    onClick={onClick}
                    disabled={isDisabled}
                >
                    <input
                        type="checkbox"
                        {...field}
                        id={name}
                        checked={field.value}
                        disabled={
                            isDisabled
                                ? true
                                : disabled
                                    ? field.value
                                        ? false
                                        : true
                                    : false
                        }
                    />

                    <label htmlFor={name}>{label}</label>
                </CheckboxStyled>
            )}
        />
    );
}

export default Checkbox;

const CheckboxStyled = styled.div`
  border-radius: 5px;
  padding: 10px 0;
  pointer-events: ${(props) => props.disabled && "none"};
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: ${(props) => (props.checkboxFirst ? "row-reverse" : "row")};
  justify-content: ${(props) =>
        props.checkboxFirst ? "flex-end" : "flex-start"};
  label {
    color: ${(props) => props.disabled && "rgba(0, 0, 0, 0.5)"};
  }
  input[type='checkbox']{
    margin: 5px 3px 3px 4px;
  }
`;
