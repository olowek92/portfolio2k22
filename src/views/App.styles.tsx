import styled from "styled-components";

export const Test = styled.div`
    width: 300px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.links};
    font-size: 50px;
`