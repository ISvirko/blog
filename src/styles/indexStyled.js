import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.pixabay.com/photo/2014/09/30/22/50/sandstone-467714_1280.jpg');
    background-size: cover;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 60px;
    margin-top: 20px;
`;

export const About = styled.p`
    color: #fff;
    font-size: 30px;
    margin-bottom: 30px;
`;

export const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

export const PostsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

export const StyledLink = styled.a`
    color: #fff;
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
