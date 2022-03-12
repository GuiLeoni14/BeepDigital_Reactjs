import styled from 'styled-components';

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
export const Slide = styled.img`
    width: 100%;
`;
