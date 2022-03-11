import { ReactNode } from 'react';
import { DefaultButton } from '../../../components/DefaultButton';
import icon_whats from '../../../assets/img/icon-whats.svg';
import { Container, Top, Bottom, IconDiscount, IconPlane } from './styles';
import icon_plane from '../../../assets/img/icon-plane.svg';
interface CardCityProps {
    title: string;
    date: string;
    iconUrl: string;
    price: string;
    showPlane?: boolean;
    showButton?: boolean;
    discount?: string;
}

function CardCity({ title, date, iconUrl, price, showPlane, showButton, discount }: CardCityProps) {
    return (
        <Container>
            <Top>
                {discount && (
                    <IconDiscount>
                        <span>{discount}</span>
                    </IconDiscount>
                )}
                {showPlane && <IconPlane src={icon_plane} />}
                <img src={iconUrl} alt="" />
            </Top>
            <Bottom>
                <h3>{title}</h3>
                <span>{date}</span>
                <h4>{price}</h4>
                {showButton && <DefaultButton text="Saiba Mais" iconUrl={icon_whats} />}
            </Bottom>
        </Container>
    );
}

export default CardCity;
