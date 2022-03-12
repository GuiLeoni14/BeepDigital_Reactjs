import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container, Slide } from './styles';
import { Navigation, Pagination } from 'swiper';
type SlideHero = {
    slideOne: string;
    slideTwo: string;
    slideTry: string;
};

function SlideHero({ slideOne, slideTwo, slideTry }: SlideHero) {
    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Slide src={slideOne} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={slideTwo} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide src={slideTry} />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default SlideHero;