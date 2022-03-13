import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const LeftContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 1080px) {
        max-width: 45%;
    }
    @media (max-width: 880px) {
        max-width: 100%;
        justify-content: center;
        margin-bottom: 2rem;
    }
`;
export const RightContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        flex-direction: column;
        & > input {
            margin-bottom: 2rem;
        }
    }
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
        color: #fff;
    }
    & > span {
        font-size: 2rem;
        font-weight: 200;
        color: #fff;
    }
    @media (max-width: 1080px) {
        & > h2 {
            font-size: 2.2rem;
        }
        & > span {
            font-size: 1.8rem;
        }
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
    background-color: #fff;
    @media (max-width: 1080px) {
        height: 5rem;
    }
`;
