import styled from 'styled-components';
import { Container } from '../styles/indexStyled';

const StyledHeader = styled.header`
    width: 100%;
    height: 200px;
    position: relative;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.pixabay.com/photo/2014/09/30/22/50/sandstone-467714_1280.jpg');
    background-size: cover;
    margin-bottom: 50px;
    @media (min-width: 768px) {
        height: 250px;
    }
    @media (min-width: 1280px) {
        height: 400px;
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 1%;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 2.2rem;
    @media (min-width: 768px) {
        font-size: 3rem;
    }
    @media (min-width: 1280px) {
        font-size: 4rem;
    }
`;

const About = styled.p`
    color: #fff;
    font-size: 1rem;
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 1280px) {
        font-size: 2rem;
    }
`;

const Header = (): JSX.Element => {
    return (
        <>
            <StyledHeader>
                <Overlay>
                    <Container>
                        <Title>Lorem Ipsum Blog</Title>
                        <About>Phasellus consectetuer vestibulum elit.</About>
                    </Container>
                </Overlay>
            </StyledHeader>
        </>
    );
};

export default Header;
