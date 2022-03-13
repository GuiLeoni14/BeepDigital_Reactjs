import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 21.6rem;
    height: 20.9rem;
    padding: 2.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0rem 1rem 2rem ${({ theme }) => theme.colors.shadow};
    border-radius: 1rem;
    & > p {
        margin-top: 2.7rem;
        font-size: 1.4rem;
        font-weight: 500;
        text-align: center;
    }
    & > p > span {
        font-weight: bold;
    }
    @media (max-width: 1312px) {
        max-width: 20rem;
    }
    @media (max-width: 1228px) {
        max-width: 21.6rem;
    }
    @media (max-width: 408px) {
        max-width: 19rem;
    }
`;

export const Icon = styled.img`
    width: 4.2rem;
    height: 4.2rem;
`;
