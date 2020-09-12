import { useState } from 'react';
import styled from 'styled-components';
import { StyledTextarea, StyledButton } from '../styles/postFormStyled';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 600px;
`;

interface ICommentForm {
    onSubmitComment: (comment: string) => void;
}

const CommentForm = ({ onSubmitComment }: ICommentForm): JSX.Element => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (comment) {
            onSubmitComment(comment);
            setComment('');
        } else alert('Please add a comment');
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledTextarea
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
                placeholder="Comment on Post"
            />
            <StyledButton type="submit">Add comment</StyledButton>
        </StyledForm>
    );
};

export default CommentForm;
