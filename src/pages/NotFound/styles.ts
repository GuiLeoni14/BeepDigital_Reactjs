import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const Icon = styled.img``;
