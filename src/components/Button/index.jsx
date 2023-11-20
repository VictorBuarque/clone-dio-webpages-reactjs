import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const CustomButton = ({ title = '', variant = "primary", onClick }) => {
    return (
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    );
};

export default CustomButton;

CustomButton.propTypes = {
    title: PropTypes.string, // Define o tipo esperado para 'title'
    variant: PropTypes.string, // Define o tipo esperado para 'variant'
    onClick: PropTypes.func, // Define o tipo esperado para 'onClick'
};