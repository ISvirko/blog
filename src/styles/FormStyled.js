import styled from 'styled-components';

export const PostFormContainer = styled.div`
    margin-top: 130px;
`;

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.secondaryLight};
    color: ${({ theme }) => theme.primaryLight};
    padding: 10px 16px;
    border-radius: 12px;
    font-weight: 600;
    width: max-content;
    align-self: center;
    &:hover {
        background-color: ${({ theme }) => theme.secondaryDark};
    }
`;

export const StyledTextarea = styled.textarea`
    padding: 4px;
    margin-bottom: 30px;
    border: 1px solid ${({ theme }) => theme.grey};
    outline: none;
    resize: vertical;
    overflow: auto;
    border-radius: 4px;
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 800px;
`;

export const StyledInput = styled.input`
    padding: 6px;
    margin-bottom: 20px;
    border: 1px solid ${({ theme }) => theme.grey};
    outline: none;
    border-radius: 4px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 4px;
    width: 250px;
    margin: 0 auto;
`;
