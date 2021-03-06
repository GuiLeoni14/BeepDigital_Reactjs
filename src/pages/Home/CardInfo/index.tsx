import { ReactNode } from 'react';

import { Container, Icon } from './styles';

type CardInfoProps = {
    children: ReactNode;
    iconUrl: string;
};

function CardInfo({ children, iconUrl }: CardInfoProps) {
    return (
        <Container>
            <Icon src={iconUrl} data-aos="zoom-in-down" />
            {children}
        </Container>
    );
}

export default CardInfo;
