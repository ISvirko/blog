import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.primaryDark};
    top: 0;
`;

const NavContainer = styled.nav`
    width: 1000px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.a`
    color: ${({ theme }) => theme.white};
    font-size: 38px;
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.secondaryLight};
    font-weight: 600;
    font-size: 20px;
    &:hover {
        color: ${({ theme }) => theme.secondaryDark};
    }
`;

const Container = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 100px;
`;

const Footer = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.primaryDark};
    bottom: 0;
    height: 60px;
`;

interface ILayout {
    children: JSX.Element;
}

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <Link href={'/'}>
                        <Logo>Blog</Logo>
                    </Link>
                    <Link href={'/posts'}>
                        <StyledLink>Posts</StyledLink>
                    </Link>
                    <Link href={'/post/new'}>
                        <StyledLink>Create Post</StyledLink>
                    </Link>
                </NavContainer>
            </Nav>

            <Container>{children}</Container>

            <Footer />
        </>
    );
};

export default Layout;
