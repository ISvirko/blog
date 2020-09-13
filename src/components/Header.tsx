import styled from 'styled-components';
import { Container } from '../styles/indexStyled';

const StyledHeader = styled.header`
    width: 100%;
    height: 400px;
    position: relative;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.pixabay.com/photo/2014/09/30/22/50/sandstone-467714_1280.jpg');
    background-size: cover;
    margin-bottom: 50px;
`;

const Overlay = styled.div`
    width: 100%;
    height: 400px;
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
    color: #fff;
    font-size: 60px;
`;

const About = styled.p`
    color: #fff;
    font-size: 30px;
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
