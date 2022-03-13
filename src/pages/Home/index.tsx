import { MainContainer } from '../../styles/container';
import SlideHero from './Slide';
import { Container, MainHero, MainInfo, MainCity, MainSale, MainNewsLatter } from './styles';
import img_slide from '../../assets/img/bg-home.jpg';
import CardInfo from './CardInfo';
import img_time from '../../assets/img/icon-time.svg';
import img_person from '../../assets/img/icon-person.svg';
import img_hand from '../../assets/img/icon-hand.svg';
import img_phone from '../../assets/img/icon-phone.svg';
import img_like from '../../assets/img/icon-like.svg';
import CardCity from './CardCity';
import img_city_one from '../../assets/img/city-one.png';
import CardSale from './CardSale';
import CardNewsLatter from './CardNewsLatter';
export default function Home() {
    function getImageUrl(name: string): string {
        return new URL(`../../assets/img/${name}`, import.meta.url).href;
    }
    return (
        <Container>
            <MainContainer>
                <MainHero>
                    <SlideHero
                        slideOne={getImageUrl('bg-rio.jpg')}
                        slideTwo={getImageUrl('bg-sp.jpg')}
                        slideTry={getImageUrl('bg-bh.jpg')}
                    />
                </MainHero>
                <MainInfo>
                    <CardInfo iconUrl={img_time}>
                        <p data-aos="zoom-in-up">
                            Estamos há mais de 26 anos realizando <span>sonhos.</span>
                        </p>
                    </CardInfo>
                    <CardInfo iconUrl={img_person}>
                        <p data-aos="zoom-in-up">
                            Somos uma agência que trabalha com <span>atendimento personalizado</span> pra você.
                        </p>
                    </CardInfo>
                    <CardInfo iconUrl={img_hand}>
                        <p data-aos="zoom-in-up">
                            Assessoria desde a escolha do seu destino até o <span>fim da sua viagem.</span>
                        </p>
                    </CardInfo>
                    <CardInfo iconUrl={img_phone}>
                        <p data-aos="zoom-in-up">
                            Ao entrar em contato conosco será <span>atendido por especialistas</span>, e será informado
                            sobre os melhores destinos.
                        </p>
                    </CardInfo>
                    <CardInfo iconUrl={img_like}>
                        <p data-aos="zoom-in-up">
                            Tudo de acordo com o seu gosto e o <span>seu bolso.</span>
                        </p>
                    </CardInfo>
                </MainInfo>
                <MainCity>
                    <CardCity
                        iconUrl={getImageUrl('city-one.png')}
                        title="Turquia E Terra Santa Com Aéreo"
                        date="Sex. Jun 10/2022"
                        price="A Partir De 15X De R$635,00"
                        showButton={true}
                        showPlane={true}
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-two.png')}
                        title="Morro De São Paulo"
                        date="Qui. Set 29/2022 Qua.Out 05/2022"
                        price="A Partir De 12X De R$266,00"
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-try.png')}
                        title="Fortaleza"
                        date="Sab. Out 01/2022 Qua.Out 05/2022"
                        price="A Partir De 15X De R$105,00"
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-for.png')}
                        title="Salvador"
                        date="Qui. Set 29/2022 Qua.Out 05/2022"
                        price="A Partir De 12X De R$175,00"
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-one.png')}
                        title="Turquia E Terra Santa Com Aéreo"
                        date="Sex. Jun 10/2022"
                        price="A Partir De 15X De R$635,00"
                        showButton={true}
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-two.png')}
                        title="Morro De São Paulo"
                        date="Qui. Set 29/2022 Qua.Out 05/2022"
                        price="A Partir De 12X De R$266,00"
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-try.png')}
                        title="Fortaleza"
                        date="Sab. Out 01/2022 Qua.Out 05/2022"
                        price="A Partir De 15X De R$105,00"
                        discount="25%Off"
                    />
                    <CardCity
                        iconUrl={getImageUrl('city-for.png')}
                        title="Salvador"
                        date="Qui. Set 29/2022 Qua.Out 05/2022"
                        price="A Partir De 12X De R$175,00"
                        discount="25%Off"
                    />
                </MainCity>
                <MainSale>
                    <CardSale
                        title="Sua viagem completa e toda segurança"
                        description="Aqui na Total Tour você encontra com pacotes aéreos, hotéis e passeios incríveis, os nossos serviços garante uma viagem mais tranquila. São milhares de opções de pacotes nacionais perfeito para você."
                        iconUrl={getImageUrl('icon-protection.svg')}
                        checkOut="Confira os nossos pacotes"
                    />
                    <CardSale
                        title="Tudo que precisa saber sobre seu destino!"
                        description="As melhores atrações, passeios, documentações, dicas sobre onde ficar, restaurantes. Encontre aqui o que você quer saber sobre sua próxima viagem, planeje suas férias aqui na Total Tour."
                        iconUrl={getImageUrl('icon-local.svg')}
                        checkOut="Confira o guia de destinos"
                    />
                    <CardSale
                        title="TAs melhores formas de pagamento estão aqui"
                        description="Realize a viagem dos seus sonhos com os serviços que a Total Tour pode te oferecer. Suas compras podem ser realizadas em até 12x , transferência bancária ou á vista. Além de benefícios exclusivos que você pode encontrar aqui conosco na Total Tour."
                        iconUrl={getImageUrl('icon-card.svg')}
                        checkOut="Confira formas de pagamento"
                    />
                </MainSale>
            </MainContainer>
            <MainNewsLatter>
                <MainContainer>
                    <CardNewsLatter />
                </MainContainer>
            </MainNewsLatter>
        </Container>
    );
}
