import { useState } from 'react';
import { StyledTextarea, StyledButton, ButtonsContainer, StyledForm } from '../styles/FormStyled';

interface ICommentForm {
    onSubmitComment: (comment: string) => void;
    setCommented: (arg0: boolean) => void;
}

const CommentForm = ({ onSubmitComment, setCommented }: ICommentForm): JSX.Element => {
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
            <ButtonsContainer>
                <StyledButton type="submit">Add comment</StyledButton>
                <StyledButton type="submit" onClick={() => setCommented(false)}>
                    Cancel
                </StyledButton>
            </ButtonsContainer>
        </StyledForm>
    );
};

export default CommentForm;
