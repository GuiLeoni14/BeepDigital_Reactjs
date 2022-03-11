import { MainContainer } from '../../styles/container';
import SlideHero from './Slide';
import { Container } from './styles';
import img_slide from '../../assets/img/bg-home.jpg';
export default function Home() {
    return (
        <Container>
            <MainContainer>
                <SlideHero slideOne={img_slide} slideTwo={img_slide} slideTry={img_slide} />
            </MainContainer>
        </Container>
    );
}
