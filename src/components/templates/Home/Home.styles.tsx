import styled from "styled-components";

export const HomeMain = styled.main`
    height: 80vh;
    width: 80%;
    margin: 0 auto;
    display: flex;

    @media(min-width: 992px) {
        width: 50%;
    }
`;

export const HomeWrap = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;

    @media(min-width: 992px) {
        width: 70%;
    }
`;

export const NameImg = styled.img`
    width: 60%;
    transform: translateX(20px);
  
    @media (min-width: 768px) {
    transform: translateX(30px);
  }
`;

export const Position = styled.p`
    margin-top: 30px;
`;

export const HomeButton = styled.button`
    outline: 0 none transparent;
    margin-top: 50px;
    width: 150px;
    height: 40px;
    background: transparent;
    border: 5px solid ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    
    @media (min-width: 768px) {
        margin-top: 30px;
    }
`;