import React from 'react';
import styled from 'styled-components';
import { AppLink } from './AppLink';
import { ReactElement } from 'react';

const Nav = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.primaryDark};
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

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

interface ILayout {
    children: ReactElement;
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
