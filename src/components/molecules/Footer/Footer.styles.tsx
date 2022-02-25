import styled from "styled-components";

export const Test = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;

    @media(min-width: 768px) {
        justify-content: flex-end;
        padding-right: 1.2rem;
    }
`

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.colors.white};

  @media(min-width: 768px) {
    padding-right: 20px;
    transition: transform 250ms;
    
        &:hover {
        transform: translateY(-2px);
    }
  }
`