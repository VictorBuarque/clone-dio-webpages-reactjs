import styled from "styled-components";
import { IUserInfoProps } from "./types";

export const Container = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
  border: 3px solid #fff;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #fff;
`;

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size 18px;
    line-height: 25px;
    color:#fff;
`;

export const Progress = styled.div <IUserInfoProps>`
    width: 180px;
    height:6px;
    background-color: #FFF;
    position: relative; //It's relative because we will build another bar with position absolute uppon this bar
    border-radius:3px;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual})=> percentual}%; //This will build the green bar with parameters
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`;