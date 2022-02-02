import styled from "styled-components";

export const Test = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.favourite};
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
`