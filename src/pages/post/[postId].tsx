import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { selectOnePost } from '../../redux/postsSelectors';
import axios from 'axios';
import { addComment, deletePost, editPost, getPostById } from '../../redux/postsOperations';
import { StyledButton } from '../../styles/FormStyled';
import PostForm from '../../components/PostForm';
import CommentForm from '../../components/CommentForm';
import { IPost } from '../../interfaces/IPost';
import { images } from '../../helpers/images';
import {
    ActionButtons,
    Block,
    ButtonsContainer,
    CommentContainer,
    Image,
    MainContainer,
    PostContainer,
    StyledLink,
} from '../../styles/postIdStyled';

interface PostProps {
    serverPost: IPost | null;
}

const Post = ({ serverPost }: PostProps): JSX.Element => {
    const [postToDisplay, setPostToDisplay] = useState(serverPost);
    const [edited, setEdited] = useState(false);
    const [commented, setCommented] = useState(false);

    const { query, isFallback, push } = useRouter();

    const dispatch: AppDispatch = useDispatch();

    const { post } = useSelector(selectOnePost);

    useEffect(() => {
        post && setPostToDisplay(post);
    }, [post]);

    useEffect(() => {
        const loadData = async () => {
            await dispatch(getPostById(query.postId.toString()));
        };

        loadData();
    }, []);

    const handleDelete = async () => {
        await dispatch(deletePost(postToDisplay.id.toString()));
        push('/posts');
    };

    const handleEdit = () => {
        setEdited(true);
    };

    const handleSubmitEditedPost = async (title: string, body: string) => {
        setEdited(false);
        await dispatch(editPost({ title, body, id: postToDisplay.id }));
    };

    const handleAddComment = () => {
        setCommented(true);
    };

    const handleSubmitComment = async (comment: string) => {
        await dispatch(addComment({ postId: postToDisplay.id, body: comment }));
        setCommented(false);
    };

    if (isFallback) {
        return <p>Loading...</p>;
    }

    if (edited) {
        return <PostForm titleToEdit={post.title} bodyToEdit={post.body} handleSubmit={handleSubmitEditedPost} />;
    }

    return (
        <MainContainer>
            <ButtonsContainer>
                <StyledButton>
                    <Link href={'/posts'}>
                        <StyledLink>Back to all posts</StyledLink>
                    </Link>
                </StyledButton>
                <ActionButtons>
                    <StyledButton type="button" onClick={handleEdit}>
                        Edit
                    </StyledButton>
                    <StyledButton type="button" onClick={handleDelete}>
                        Delete
                    </StyledButton>
                </ActionButtons>
            </ButtonsContainer>

            <PostContainer>
                <Image
                    src={
                        images[postToDisplay.id - 1] ||
                        'https://waterfrontventures.co/wp-content/uploads/2017/07/dummy.jpg'
                    }
                    alt={postToDisplay.title}
                />
                <Block>
                    <h1>{postToDisplay.title}</h1>
                    <p>{postToDisplay.body}</p>
                </Block>
            </PostContainer>

            {commented ? (
                <CommentForm onSubmitComment={handleSubmitComment} setCommented={setCommented} />
            ) : (
                <StyledButton onClick={handleAddComment}>Comment on Post</StyledButton>
            )}

            {postToDisplay.comments && postToDisplay.comments.length === 0 ? <p>No comments yet</p> : <h4>Comments</h4>}

            <ul>
                {postToDisplay.comments &&
                    postToDisplay.comments.map((comment) => (
                        <li key={comment.id}>
                            <CommentContainer>{comment.body}</CommentContainer>
                        </li>
                    ))}
            </ul>
        </MainContainer>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params.postId as string;
    const res = await axios(`/posts/${id}?_embed=comments`);
    const serverPost: IPost = res.data;
    return { props: { serverPost }, revalidate: 20 };
};

export const getStaticPaths: GetStaticPaths<{ postId: string }> = async () => {
    const res = await axios(`/posts`);
    const allPosts: IPost[] = res.data;
    const paths = allPosts.map((post) => {
        return { params: { postId: post.id.toString() } };
    });

    return {
        fallback: true,
        paths,
    };
};

export default Post;
