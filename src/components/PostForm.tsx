import {
    ButtonsContainer,
    PostFormContainer,
    StyledButton,
    StyledForm,
    StyledInput,
    StyledTextarea,
} from '../styles/FormStyled';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface IPostFormProps {
    titleToEdit?: string;
    bodyToEdit?: string;
    handleSubmit: (title: string, body: string) => void;
}

const PostForm = ({ handleSubmit, titleToEdit, bodyToEdit }: IPostFormProps): JSX.Element => {
    const [title, setTitle] = useState(titleToEdit ? titleToEdit : '');
    const [body, setBody] = useState(bodyToEdit ? bodyToEdit : '');
    const [closeForm, setCloseForm] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (title && body) {
            handleSubmit(title, body);
            setTitle('');
            setBody('');
        }

        if ((!title || !body) && !closeForm) alert('Please fill in all fields before submitting');
    };

    const { push } = useRouter();

    const handleCancel = () => {
        setCloseForm(true);
        push('/posts');
    };

    return (
        <PostFormContainer>
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

                <ButtonsContainer>
                    <StyledButton type="submit">{titleToEdit || bodyToEdit ? 'Save' : 'Add post'}</StyledButton>
                    <StyledButton type="button" onClick={handleCancel}>
                        Cancel
                    </StyledButton>
                </ButtonsContainer>
            </StyledForm>
        </PostFormContainer>
    );
};

export default PostForm;
