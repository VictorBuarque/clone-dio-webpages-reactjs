import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 24px;
  line-height: 44px;
  self-align: center;
  color: #FFF
`;

export const TitleHighLight = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 25px;
  self-align: center;
  color: #FFFFFF70;
`;


export const Column = styled.div`
  flex: ${({flex})=>flex}; // when we pass properties to flex, we want insert weight on component of flex box.
  padding-right:24px;      // how higher is the weight bigger is the size of the flex box
`