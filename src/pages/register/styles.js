import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Wrapper = styled.div`
    max-width:300px;
    margin: 10px 100px;

    @media (max-width: 768px) {
        margin: 10px;
    }
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    self-align: center;

    @media (max-width: 768px) {
        font-size: 28px;
        width: auto;
        text-align: center;
    }
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 10px;
    line-height: 44px;
    color: #FFF;

    @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`

export const SubtitleRegister = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 35px;
    line-height: 25px;
    color: #FFF;
    ::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`

export const Paragraph = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #FFF;
    ::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
    color: rgba(35,221,122,1);
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    ::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`
