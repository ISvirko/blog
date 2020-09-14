import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, loadPosts } from '../../../redux/postsOperations';
import PostForm from '../../../components/PostForm';

const NewPost = (): JSX.Element => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            await dispatch(loadPosts());
        };

        loadData();
    }, []);

    const router = useRouter();

    const handleSubmit = async (title: string, body: string) => {
        dispatch(addPost({ title, body }));
        router.push('/posts');
    };

    return <PostForm handleSubmit={handleSubmit} />;
};

export default NewPost;
