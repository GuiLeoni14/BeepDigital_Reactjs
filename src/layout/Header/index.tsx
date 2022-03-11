import { ReactNode } from 'react';
import { MainContainer } from '../../styles/container';
import logo from '../../assets/img/logo.png';
import { Container, MainHeader, Logo, Text, ListContact } from './styles';
import Contact from './Contact';
import icon_insta from '../../assets/img/icon-insta.svg';
function Header() {
    return (
        <Container>
            <MainContainer>
                <MainHeader>
                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>
                    <Text>
                        Há <span>26 anos</span> realizando viagens <span>inesquecíveis.</span>
                    </Text>
                    <ListContact>
                        <Contact text="Siga-nos" description="@Totaltour" icon={icon_insta} />
                        <Contact text="Siga-nos" description="@Totaltour" icon={icon_insta} />
                        <Contact text="Siga-nos" description="@Totaltour" icon={icon_insta} />
                    </ListContact>
                </MainHeader>
            </MainContainer>
        </Container>
    );
}

export default Header;
