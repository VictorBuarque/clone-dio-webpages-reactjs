import styled, {css} from 'styled-components';
export const ButtonContainer = styled.button`
    background: transparent;
    border-radius: 8px;
    position: relative;
    backgroud: #5656;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    padding: 5px;
    margin: 5px;

    &:hover{
        opacity:0.6;
        cursor: pointer;
    }

    

    ${({variant})=>variant !== "primary" && css`
        min-width:167px;
        height: 33px;
        background: #e41050;
        color: #FFFFFF;
        border-radius:22px;
        &:hover{
            opacity:0.6;
            cursor: pointer;
        }
        &::after{
            content: '';
            position: absolute;
        //    border: 1px solid #e41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height:calc(100% +10px);
            border-radius:22px;
            
        }
    `}
`