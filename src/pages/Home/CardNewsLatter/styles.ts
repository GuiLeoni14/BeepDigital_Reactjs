import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const LeftContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const RightContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Text = styled.div`
    margin-left: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    & > h2 {
        font-size: 3rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
    }
    & > span {
        font-size: 2rem;
        font-weight: 200;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const Icon = styled.img``;
export const Input = styled.input`
    width: 100%;
    padding: 0rem 2rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    max-width: 48.9rem;
    height: 6.3rem;
    margin-right: 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary};
`;
