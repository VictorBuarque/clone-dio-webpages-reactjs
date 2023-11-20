import styled, {css} from 'styled-components';
export const ButtonContainer = styled.button`
    background: transparent;
    border-radius: 8px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    padding: 5px;
    margin: 5px;

    &:hover{
        background: #7F28B5;
    }

    ${({variant})=>variant !== "primary" && css`
        min-width:167px;
        height: 33px;
        background: #7F28B5;

        &::after{
            content: '',
            position: absolute;
            border: 1px solid #7F28B5;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height:calc(100% +10px);
            border-radius:22px;
            
        }
    `}
`