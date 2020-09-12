import Link from 'next/link';
import { StyledCard, StyledImg, StyledLink } from '../styles/postsStyled';
import { IPost } from '../interfaces/IPost';
import { images } from '../helpers/images';

interface PostListItemProps {
    post: IPost;
}

const PostListItem = ({ post }: PostListItemProps): JSX.Element => {
    return (
        <li>
            <StyledCard>
                <StyledImg src={images[post.id - 1]} alt={post.title} />
                <Link href={'./post/[postId]'} as={`/post/${post.id}`}>
                    <StyledLink>{post.title}</StyledLink>
                </Link>
            </StyledCard>
        </li>
    );
};

export default PostListItem;
