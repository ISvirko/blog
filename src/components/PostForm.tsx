import { StyledButton, StyledForm, StyledInput, StyledTextarea } from '../styles/postFormStyled';
import { useState } from 'react';

interface IPostFormProps {
    titleToEdit?: string;
    bodyToEdit?: string;
    handleSubmit: (title: string, body: string) => void;
}

const PostForm = ({ handleSubmit, titleToEdit, bodyToEdit }: IPostFormProps): JSX.Element => {
    const [title, setTitle] = useState(titleToEdit ? titleToEdit : '');
    const [body, setBody] = useState(bodyToEdit ? bodyToEdit : '');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        handleSubmit(title, body);
        setTitle('');
        setBody('');
    };

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <StyledInput
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <StyledTextarea
                name="body"
                placeholder="Body"
                rows={5}
                value={body}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
            />

            <StyledButton type="submit">{titleToEdit || bodyToEdit ? 'Save' : 'Add post'}</StyledButton>
        </StyledForm>
    );
};

export default PostForm;
