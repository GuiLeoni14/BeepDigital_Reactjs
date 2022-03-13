import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    width: 100%;
    z-index: 2022;
`;
export const MainHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
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
    @media (max-width: 1260px) {
        text-align: center;
        margin: 0rem 1rem;
    }
    @media (max-width: 530px) {
        display: none;
    }
`;

export const ListContact = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const ButtonMenuMobile = styled.div`
    display: none;
    @media (max-width: 1000px) {
        display: block;
    }
`;

export const IconToggleTheme = styled.img`
    width: 4rem;
    height: 4rem;
    position: absolute;
    bottom: -6rem;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        fill: #fff;
    }
`;
