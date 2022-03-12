import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20000;
    opacity: 1;
    pointer-events: all;
`;
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
`;
export const MainMenuMobile = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    height: 100%;
    background-color: #fff;
    padding: 3rem;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
`;
