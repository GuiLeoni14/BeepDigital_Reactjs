import { ReactNode } from 'react';

import { Container, Top, Bottom, IconDiscount, IconPlane } from './styles';

interface CardCityProps {
    title: string;
    date: string;
    iconUrl: string;
    price: string;
    showPlane?: boolean;
    showButton?: boolean;
}

function CardCity({ title, date, iconUrl, price, showPlane, showButton }: CardCityProps) {
    return (
        <Container>
            <Top>
                <IconDiscount />
                {showPlane && <IconPlane />}
                <img src={iconUrl} alt="" />
            </Top>
            <Bottom>
                <h3>{title}</h3>
                <span>{date}</span>
                <h4>{price}</h4>
                {showButton && <button>Saiba mais</button>}
            </Bottom>
        </Container>
    );
}

export default CardCity;
