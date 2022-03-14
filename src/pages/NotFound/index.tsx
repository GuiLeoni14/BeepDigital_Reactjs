import { ReactNode } from 'react';
import { Link, Navigate } from 'react-router-dom';
import gif_not_found from '../../assets/img/notfound.gif';
import { DefaultButton } from '../../components/DefaultButton';
import { MainContainer } from '../../styles/container';
import { Container, Icon } from './styles';

function NotFound() {
    return (
        <Container>
            <MainContainer>
                <Icon src={gif_not_found} />
                <Link to="/">
                    <DefaultButton text="Voltar para home" />
                </Link>
            </MainContainer>
        </Container>
    );
}

export default NotFound;
