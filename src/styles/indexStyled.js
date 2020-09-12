import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

export const PostsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.primaryLight};
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: underline;
    &:hover {
        color: ${({ theme }) => theme.secondaryDark};
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
