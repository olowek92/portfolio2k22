import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.bcgActiveLink};
        border-left: 4px solid ${({ theme }) => theme.colors.main};
    }

    @media(min-width: 992px) {
        &:hover {
            border: none;
        }
    }
`

export const MenuLabel = styled.span`
    margin-left: 1rem;
`

export const SubmenuIconWrap = styled.div`
    margin-left: 1rem;
`

export const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    @media(min-width: 992px) {
        padding-left: 2rem;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.bcgActiveLink};
        border-left: 4px solid ${({ theme }) => theme.colors.main};
    }
`

export const DropdownLinkWrap = styled.div`

    @media(min-width: 992px) {
        position: absolute;
    }
`