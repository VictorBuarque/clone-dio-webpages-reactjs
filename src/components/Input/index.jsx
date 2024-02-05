import React from 'react';
import PropTypes from 'prop-types';
import { IconContainer, InputContainer, InputText } from './styles';

const Input = ({leftIcon, name, ...rest}) => { 
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputText {...rest}/>  {/* spread */}
    </InputContainer>
    )
}
Input.propTypes = {
  leftIcon: PropTypes.node, 
  name: PropTypes.string, 
};
export {Input};
