import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Container, Slide, TextSlide } from './styles';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { DefaultButton } from '../../../components/DefaultButton';
export type SlideHeroProps = {
    slideOne: string;
    slideTwo: string;
    slideTry: string;
};

function SlideHero({ slideOne, slideTwo, slideTry }: SlideHeroProps) {
    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                pagination={{ clickable: true }}
                data-aos="zoom-in-down"
            >
                <SwiperSlide>
                    <Slide background={slideOne}>
                        <TextSlide>
                            <h4>
                                Elaboramos de acordo com a sua preferência e objetivo para qualquer destino do brasil e
                                do mundo
                            </h4>
                            <span>Há mais de 26 anos realizando sonhos</span>
                            <h4>Somos uma agência de viagens especializadas em:</h4>
                            <h2>Roteiros Personalizados</h2>
                            <DefaultButton text="Converse conosco" />
                        </TextSlide>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide background={slideTwo}>
                        <TextSlide>
                            <h4>
                                Elaboramos de acordo com a sua preferência e objetivo para qualquer destino do brasil e
                                do mundo
                            </h4>
                            <span>Há mais de 26 anos realizando sonhos</span>
                            <h4>Somos uma agência de viagens especializadas em:</h4>
                            <h2>Roteiros Personalizados</h2>
                            <DefaultButton text="Converse conosco" />
                        </TextSlide>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide background={slideTry}>
                        <TextSlide>
                            <h4>
                                Elaboramos de acordo com a sua preferência e objetivo para qualquer destino do brasil e
                                do mundo
                            </h4>
                            <span>Há mais de 26 anos realizando sonhos</span>
                            <h4>Somos uma agência de viagens especializadas em:</h4>
                            <h2>Roteiros Personalizados</h2>
                            <DefaultButton text="Converse conosco" />
                        </TextSlide>
                    </Slide>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default SlideHero;
