import { MainContainer } from '../../styles/container';
import SlideHero from './Slide';
import { Container, MainHome, MainInfo, MainCity } from './styles';
import img_slide from '../../assets/img/bg-home.jpg';
import CardInfo from './CardInfo';
import img_time from '../../assets/img/icon-time.svg';
import img_person from '../../assets/img/icon-person.svg';
import img_hand from '../../assets/img/icon-hand.svg';
import img_phone from '../../assets/img/icon-phone.svg';
import img_like from '../../assets/img/icon-like.svg';
import CardCity from './CardCity';
import img_city_one from '../../assets/img/city-one.png';
export default function Home() {
    function getImageUrl(name: string): string {
        return new URL(`../../assets/img/${name}`, import.meta.url).href;
    }
    return (
        <Container>
            <MainHome>
                <SlideHero slideOne={img_slide} slideTwo={img_slide} slideTry={img_slide} />
            </MainHome>
            <MainInfo>
                <CardInfo iconUrl={img_time}>
                    <p>
                        Estamos há mais de 26 anos realizando <span>sonhos.</span>
                    </p>
                </CardInfo>
                <CardInfo iconUrl={img_person}>
                    <p>
                        Somos uma agência que trabalha com <span>atendimento personalizado</span> pra você.
                    </p>
                </CardInfo>
                <CardInfo iconUrl={img_hand}>
                    <p>
                        Assessoria desde a escolha do seu destino até o <span>fim da sua viagem.</span>
                    </p>
                </CardInfo>
                <CardInfo iconUrl={img_phone}>
                    <p>
                        Ao entrar em contato conosco será <span>atendido por especialistas</span>, e será informado
                        sobre os melhores destinos.
                    </p>
                </CardInfo>
                <CardInfo iconUrl={img_like}>
                    <p>
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
        </Container>
    );
}
