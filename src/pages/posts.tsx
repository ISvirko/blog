import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { loadPosts } from '../redux/postsOperations';
import { selectPosts } from '../redux/postsSelectors';
import axios from 'axios';
import { IPost } from '../interfaces/IPost';
import styled from 'styled-components';
import { Container } from '../styles/indexStyled';
import PostListItem from '../components/PostListItem';

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 80px;
    margin-top: 100px;
`;

export const List = styled.ul`
    // display: grid;
    // grid-template-columns: repeat(3, 2fr);
    // grid-gap: 20px;
`;

interface PostsProps {
    serverPosts: IPost[] | null;
}

const Posts = ({ serverPosts }: PostsProps): JSX.Element => {
    const [postsToDisplay, setPostsToDisplay] = useState(serverPosts);

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            await dispatch(loadPosts());
        };

        loadData();
    }, []);

    const { posts } = useSelector(selectPosts);

    useEffect(() => {
        setPostsToDisplay(posts);
    }, [posts]);

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Loading...</p>;
    }

    const reversedPosts = [...postsToDisplay].reverse();

    return (
        <Container>
            <Title>Posts</Title>
            <List>{reversedPosts && reversedPosts.map((post) => <PostListItem key={post.id} post={post} />)}</List>
        </Container>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios('/posts');
    const serverPosts: IPost[] = res.data;
    return { props: { serverPosts, revalidate: 20 } };
};

export default Posts;
