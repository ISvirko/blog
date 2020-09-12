import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.primaryDark};
    top: 0;
`;

export const NavContainer = styled.nav`
    width: 1000px;
    margin: 0 auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    margin-top: 80px;
    // display: flex;
    // justify-content: center;
    padding-bottom: 50px;
`;
