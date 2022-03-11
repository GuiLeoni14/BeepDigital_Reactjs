import styled from 'styled-components';

export const Container = styled.button`
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
`;

export const Icon = styled.img`
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.8rem;
`;
