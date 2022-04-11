import styled from "styled-components";

export const AboutMain = styled.div`
    height: 80vh;
    width: 80%;
    margin: 0 auto;
    display: flex;

    @media(min-width: 768px) {
        width: 50%;
        transform: translateX(-100px);
    }

    @media(min-width: 992px) {
        transform: none;
    }
`

export const AboutWrap = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;

    @media(min-width: 992px) {
        width: 70%;
    }
`

export const AboutHeader = styled.h1`
    margin-bottom: 30px;
`

export const AboutDescription = styled.p`
    line-height: 22px;

    @media(min-width: 992px) {
        line-height: 25px;
    }
` 