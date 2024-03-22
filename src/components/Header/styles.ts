import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    max-width:80%;
    height:48px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    self-align: center;
    background-color: #000;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Wrapper = styled.div`
    background-color: #000;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BuscarInputContainer = styled.div`
    width:100px;
    height: 30px;
    background-color: #2d2d37;
    border-radius: 8px;
    gap: 5px;
    margin: 0 12px;
    align-items: center;
`
export const Menu = styled.a`
    font-family: "Helvetica Neue"
    font-size:12px;
    font-style: normal;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;

`
export const MenuRight = styled.a`
    font-family: "Helvetica Neue"
    font-size:12px;
    font-style: normal;
    line-height: 25px;
    color: #FFFFFF;
    margin:0 12px;
    text-decoration: none;
    padding: 2px;
`
export const UserPicture = styled.img`
    width: 32px;
    height 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`
export const FlagPicture = styled.img`
    width: 32px;
    height 32px;
    border-radius: 22px;
    border: 2px solid #000000;
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    self-align: center;
`

