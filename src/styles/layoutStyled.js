import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.primaryDark};
    top: 0;
`;

export const NavContainer = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.a`
    color: ${({ theme }) => theme.white};
    font-size: 2rem;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.secondaryLight};
    font-weight: 600;
    font-size: 1rem;
    &:hover {
        color: ${({ theme }) => theme.secondaryDark};
    }
`;

export const LayoutContainer = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 100px;
`;

export const Footer = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.white};
    bottom: 0;
    height: 60px;
    display: flex;
    justify-content: center;
`;
