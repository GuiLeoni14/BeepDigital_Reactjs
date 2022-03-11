import { ReactNode } from 'react';
import { MainContainer } from '../../styles/container';
import CardContact from './CardContact';

import { Container, MainFooter } from './styles';

export default function Footer() {
    return (
        <Container>
            <MainContainer>
                <MainFooter>
                    <CardContact
                        text="Email"
                        description="leonardo@totaltour.com.br"
                        optionDescription="viagens@totaltour.com.br"
                    />
                    <CardContact
                        text="Telefone"
                        description="Precisando de algo mais personalizado?"
                        optionDescription="(11) 94953-0627"
                    />
                    <CardContact
                        text="Endereço"
                        description="Rua Sena Madureira, 1355 - Vila Clementino - São Paulo - SP, 04021-051"
                    />
                </MainFooter>
            </MainContainer>
        </Container>
    );
}
