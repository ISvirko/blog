import React from 'react';
import { AppLink } from './AppLink';
import { Container, Nav, NavContainer } from '../styles/layoutStyled';

interface ILayout {
    children: JSX.Element;
}

const Layout = ({ children }: ILayout): JSX.Element => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <AppLink href={'/'} name="Home" />
                    <AppLink href={'/posts'} name="Posts" />
                    <AppLink href={'/post/new'} name="Create Post" />
                </NavContainer>
            </Nav>

            <Container>{children}</Container>
        </>
    );
};

export default Layout;
