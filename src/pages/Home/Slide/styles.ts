import styled from 'styled-components';
import { SlideHeroProps } from '.';
type StyleProps = {
    background: string;
};
export const Container = styled.div`
    width: 100%;
    .swiper-pagination-bullet {
        background-color: #fff !important;
    }
    .swiper-button-prev,
    .swiper-button-next {
        color: #fff !important;
        @media (max-width: 600px) {
            display: none;
        }
    }
`;
export const Slide = styled('div')<StyleProps>`
    width: 100%;
    padding: 4rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${(props) => props.background}) no-repeat center center;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: color;
`;

export const TextSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 50%;
    & > h4,
    & > span,
    & > h2 {
        color: ${({ theme }) => theme.colors.primary};
    }
    & > h4 {
        font-size: 1.8rem;
        font-weight: 500;
    }
    & > span {
        margin: 2rem 0rem 3rem 0rem;
        font-size: 2.2rem;
        font-weight: bold;
    }
    & > h4:nth-of-type(2) {
        font-size: 2rem;
    }
    & > h2 {
        font-size: 6rem;
        font-family: 'Satisfy', sans-serif;
        font-weight: 400;
    }
    & > button {
        margin-top: 2rem;
        font-size: 1.6rem;
        border-radius: 0.5rem;
    }
`;
