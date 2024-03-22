import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";
import { IInputProps } from "./types";

const Input = ({ leftIcon, name, control, errorsMessage, ...rest }:IInputProps) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field: {value,onChange} }) => (
            <InputText value={value} onChange={onChange} {...rest} />
          )} /* spread */
        />
      </InputContainer>
      {errorsMessage ? <ErrorText>{errorsMessage}</ErrorText> : null}
    </>
  );
};

export { Input };
