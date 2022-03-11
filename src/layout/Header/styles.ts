import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;
export const MainHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Logo = styled.div``;
export const Text = styled.h4`
    font-style: normal;
    font-size: 1.8rem;
    letter-spacing: 0rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.title};
    & > span {
        font-weight: bold;
    }
`;

export const ListContact = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;
