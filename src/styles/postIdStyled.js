import styled from 'styled-components';

export const InnerContainer = styled.div`
    margin: 110px 0;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.primaryLight};
    font-weight: 600;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
`;

export const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 140px;
`;

export const CommentContainer = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25), 0 2px 3px rgba(0, 0, 0, 0.22);
    &:not(last-child) {
        margin-bottom: 20px;
    }
`;

export const PostContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`;

export const Block = styled.section`
    width: 65%;
`;

export const Image = styled.img`
    max-width: 100px;
    max-height: 100px;
    @media (min-width: 768px) {
        max-width: 230px;
        max-height: 230px;
    }
    @media (min-width: 1280px) {
        max-width: 400px;
        max-height: 400px;
    }
`;
