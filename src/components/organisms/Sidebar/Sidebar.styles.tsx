import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;

    @media(min-width: 992px) {
        justify-content: space-between;
    }
`

export const NavLogo = styled.img`
    display: none;

    @media(min-width: 992px) {
        display: block;
        margin-left: 2rem;
    }
`

export const MenuDesktop = styled.div`
    display: none;

    @media(min-width: 992px) {
        display: flex;
    }
`

export const NavIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
    cursor: pointer;

    @media(min-width: 992px) {
        display: none;
    }
`

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => sidebar ? '0' : '-100%'};
    transition: 350ms;

    @media(min-width: 992px) {
        display: none;
    }
`

export const SidebarWrap = styled.div`

`