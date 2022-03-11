import { ReactNode } from 'react';
import { MainContainer } from '../../styles/container';
import logo from '../../assets/img/logo.png';
import { Container, MainHeader, Logo, Text, ListContact } from './styles';
import Contact from './Contact';
import icon_insta from '../../assets/img/icon-insta.svg';
import icon_phone from '../../assets/img/icon-phone.svg';
import icon_email from '../../assets/img/icon-email.svg';
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
                        <Contact text="Siga-nos" description="(11) 94953-0627" icon={icon_phone} />
                        <Contact text="Siga-nos" description="Leonardo@Totaltour.Com.Br" icon={icon_email} />
                    </ListContact>
                </MainHeader>
            </MainContainer>
        </Container>
    );
}

export default Header;
