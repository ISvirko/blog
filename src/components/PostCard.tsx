import Link from 'next/link';
import styled from 'styled-components';
import { IPost } from '../interfaces/IPost';
import { images } from '../helpers/images';

const StyledCard = styled.div`
    width: 300px;
    height: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
`;

const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
    object-fit: cover;
    flex: 5;
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.primaryLight};
    font-size: 30px;
    overflow-y: hidden;
    flex: 1;
`;

interface PostCardProps {
    post: IPost;
}

const PostCard = ({ post }: PostCardProps): JSX.Element => {
    return (
        <li>
            <StyledCard>
                <StyledImg
                    src={images[post.id - 1] || 'https://waterfrontventures.co/wp-content/uploads/2017/07/dummy.jpg'}
                    alt={post.title}
                />
                <Link href={'./post/[postId]'} as={`/post/${post.id}`}>
                    <StyledLink>{post.title}</StyledLink>
                </Link>
            </StyledCard>
        </li>
    );
};

export default PostCard;
