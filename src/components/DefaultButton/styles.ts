import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 0rem 1.8rem;
    line-height: 4rem;
    border-radius: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.second};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s;
    ${({ className }) =>
        className?.includes('submit') &&
        css`
            line-height: 6.3rem;
            font-size: 2rem;
            padding: 0rem 6.7rem;
            @media (max-width: 1080px) {
                padding: 0rem 4rem;
                line-height: 5rem;
            }
        `};
`;

export const Icon = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.8rem;
`;
