import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 740px;
    }
    @media (min-width: 1280px) {
        width: 1200px;
    }
`;

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
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
    margin-top: 40px;
`;
