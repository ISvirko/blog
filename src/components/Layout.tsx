import React from 'react';
import Link from 'next/link';
import { Footer, LayoutContainer, Logo, Nav, NavContainer, StyledLink } from '../styles/layoutStyled';
import { Container } from '../styles/indexStyled';

interface ILayout {
    children: JSX.Element;
}

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <>
            <Nav>
                <Container>
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
                </Container>
            </Nav>

            <LayoutContainer>{children}</LayoutContainer>

            <Footer>
                <p>&copy;All rights reserved</p>
            </Footer>
        </>
    );
};

export default Layout;
