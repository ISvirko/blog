import styled from 'styled-components';

export const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.primaryLight};
    font-size: 30px;
`;

export const StyledCard = styled.div`
    width: 300px;
    height: max-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 60px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 20px;
`;
