import icon_letter from '../../../assets/img/icon-letter.svg';
import { DefaultButton } from '../../../components/DefaultButton';
import { Container, LeftContent, RightContent, Icon, Text, Input } from './styles';

function CardNewsLatter() {
    return (
        <Container>
            <LeftContent data-aos="fade-down">
                <Icon src={icon_letter} />
                <Text>
                    <h2>Assine nossa newsletter</h2>
                    <span>E receba nossas promoções</span>
                </Text>
            </LeftContent>
            <RightContent data-aos="fade-up">
                <Input type="email" placeholder="Digite seu email" />
                <DefaultButton text="Enviar" customClass="submit" />
            </RightContent>
        </Container>
    );
}

export default CardNewsLatter;
