import React, { ReactElement } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${({ theme }) => theme.secondaryLight};
    font-weight: 600;
    font-size: 20px;
    &:hover {
        color: ${({ theme }) => theme.secondaryDark};
    }
`;

export interface IAppLink {
    href: string;
    name: string;
}

export const AppLink = ({ href, name }: IAppLink): ReactElement => (
    <Link href={href}>
        <StyledLink href={href}>{name}</StyledLink>
    </Link>
);

AppLink.displayName = 'AppLink';
