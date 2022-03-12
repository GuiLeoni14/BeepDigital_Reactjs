import styled from 'styled-components';
import bg_newsletter from '../../assets/img/bg-newsletter.png';
export const Container = styled.section`
    width: 100%;
`;
export const MainHero = styled.div`
    width: 100%;
`;

export const MainInfo = styled.div`
    padding-top: 6.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
`;

export const MainCity = styled.div`
    width: 100%;
    padding-top: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7rem 1.6rem;
`;

export const MainSale = styled.div`
    width: 100%;
    padding: 6.5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
`;

export const MainNewsLatter = styled.div`
    width: 100%;
    height: 27.4rem;
    background: url(${bg_newsletter}) no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
