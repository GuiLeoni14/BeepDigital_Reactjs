import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & + div {
        margin-left: 3.9rem;
    }
`;

export const Icon = styled.div``;
export const Text = styled.div`
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > h6,
    & > span {
        color: ${({ theme }) => theme.colors.second};
        font-size: 1.4rem;
    }
    & > h6 {
        font-weight: bold;
    }
    & > span {
        font-weight: 400;
        white-space: nowrap;
    }
`;
