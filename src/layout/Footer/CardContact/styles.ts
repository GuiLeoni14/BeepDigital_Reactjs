import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    & > h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.second};
    }
    & > span {
        font-weight: normal;
        font-style: normal;
        text-transform: lowercase;
        font-size: 1.2rem;
    }
    & > span:nth-of-type(1) {
        margin-top: 2.1rem;
    }
    &:nth-child(3) span {
        text-align: center;
        max-width: 33.6rem;
    }
`;
