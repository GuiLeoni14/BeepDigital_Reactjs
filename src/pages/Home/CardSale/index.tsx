import { ReactNode } from 'react';
import icon_arrow from '../../../assets/img/icon-arrow.svg';
import { Container, Text, Icon, IconCheck } from './styles';

interface CardSaleProps {
    title: string;
    description: string;
    iconUrl: string;
    checkOut: string;
}

function CardSale({ title, description, iconUrl, checkOut }: CardSaleProps) {
    return (
        <Container data-aos="fade-down">
            <Text>
                <Icon src={iconUrl} />
                <h3>{title}</h3>
                <p>{description}</p>
            </Text>
            <span>
                {checkOut}
                <IconCheck src={icon_arrow} />
            </span>
        </Container>
    );
}

export default CardSale;
