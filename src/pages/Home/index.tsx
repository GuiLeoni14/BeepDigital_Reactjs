import { MainContainer } from '../../styles/container';
import SlideHero from './Slide';
import { Container, MainHome, MainInfo } from './styles';
import img_slide from '../../assets/img/bg-home.jpg';
import CardInfo from './CardInfo';
import img_time from '../../assets/img/icon-time.svg';
import img_person from '../../assets/img/icon-person.svg';
import img_hand from '../../assets/img/icon-hand.svg';
import img_phone from '../../assets/img/icon-phone.svg';
import img_like from '../../assets/img/icon-like.svg';
export default function Home() {
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
        </Container>
    );
}
