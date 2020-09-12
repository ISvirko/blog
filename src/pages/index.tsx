import axios from 'axios';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLink } from '../components/AppLink';
import PostListItem from '../components/PostListItem';
import { IPost } from '../interfaces/IPost';
import { loadPosts } from '../redux/postsOperations';
import { selectPosts } from '../redux/postsSelectors';
import { AppDispatch } from '../redux/store';
import {
    About,
    Background,
    Container,
    Overlay,
    PostsContainer,
    Title,
    StyledLink,
    LinkWrapper,
} from '../styles/indexStyled';

interface PostsProps {
    serverPosts: IPost[] | null;
}

const HomePage = ({ serverPosts }: PostsProps): JSX.Element => {
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

    const reversedPosts = postsToDisplay && [...postsToDisplay].reverse().splice(0, 3);

    return (
        <Background>
            <Overlay>
                <Container>
                    <Title>Lorem Ipsum Blog</Title>
                    <About>Phasellus consectetuer vestibulum elit.</About>
                    <PostsContainer>
                        {reversedPosts.map((post) => (
                            <PostListItem key={post.id} post={post} />
                        ))}
                    </PostsContainer>
                    <LinkWrapper>
                        <Link href="/posts">
                            <StyledLink>Read more</StyledLink>
                        </Link>
                    </LinkWrapper>
                </Container>
            </Overlay>
        </Background>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios('/posts');
    const serverPosts: IPost[] = res.data;
    return { props: { serverPosts, revalidate: 20 } };
};

export default HomePage;
