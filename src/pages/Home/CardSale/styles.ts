import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    max-width: 41.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 2.5rem;
    border-radius: 1rem;
    padding: 2.5rem 0rem;
    box-shadow: 0rem 1rem 2rem ${({ theme }) => theme.colors.shadow};
    & > span {
        color: ${({ theme }) => theme.colors.second};
        font-size: 1.4rem;
        font-weight: bold;
        align-self: flex-end;
        margin-right: 2.5rem;
        margin-top: 7.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const Text = styled.div`
    padding: 0rem 7.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    text-align: center;
    & > h3 {
        font-size: 1.8rem;
        font-weight: bold;
        margin: 2rem 0rem;
    }
    & > p {
        font-size: 1.4rem;
        font-weight: 500;
    }
`;
export const Icon = styled.img``;
export const IconCheck = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
`;
