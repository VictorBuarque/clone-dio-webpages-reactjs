import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const CustomButton = ({ title = '', variant = "primary", onClick } :IButtonProps ) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    );
};

export default CustomButton;
