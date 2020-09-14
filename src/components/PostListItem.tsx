import Link from 'next/link';
import styled from 'styled-components';
import { IPost } from '../interfaces/IPost';
import { images } from '../helpers/images';
import { formattedString } from '../helpers/formattedString';

const StyledCard = styled.li`
    width: 100%;
    max-height: 150px;
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
    &:not(last-child) {
        margin-bottom: 20px;
    }
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 30px;
`;

const StyledLink = styled.a`
    color: ${({ theme }) => theme.primaryLight};
    font-size: 30px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface PostListItemProps {
    post: IPost;
}

const PostListItem = ({ post }: PostListItemProps): JSX.Element => {
    return (
        <StyledCard>
            <StyledImg
                src={images[post.id - 1] || 'https://waterfrontventures.co/wp-content/uploads/2017/07/dummy.jpg'}
                alt={post.title}
            />
            <ContentContainer>
                <Link href={'./post/[postId]'} as={`/post/${post.id}`}>
                    <StyledLink>{post.title}</StyledLink>
                </Link>
                <p>{formattedString(post.body)}</p>
            </ContentContainer>
        </StyledCard>
    );
};

export default PostListItem;
