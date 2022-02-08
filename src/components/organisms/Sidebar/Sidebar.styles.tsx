import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.black};
`

export const NavIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
    cursor: pointer;
`

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => sidebar ? '0' : '-100%'};
    transition: 350ms;
`

export const SidebarWrap = styled.div`
    
`