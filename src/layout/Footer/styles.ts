import styled from 'styled-components';

export const Container = styled.footer`
    padding: 10rem 0rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        padding: 2rem 0rem;
    }
`;
export const MainFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        & :not(:first-child) {
            margin-top: 2rem;
        }
    }
`;
