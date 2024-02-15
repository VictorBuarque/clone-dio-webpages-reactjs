import PropTypes from "prop-types";
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorsMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText {...field} {...rest} />
          )} /* spread */
        />
      </InputContainer>
      {errorsMessage ? <ErrorText>{errorsMessage}</ErrorText> : null}
    </>
  );
};
Input.propTypes = {
  leftIcon: PropTypes.node,
  name: PropTypes.string,
  errorsMessage: PropTypes.string,
  control: PropTypes.object
};
export { Input };
