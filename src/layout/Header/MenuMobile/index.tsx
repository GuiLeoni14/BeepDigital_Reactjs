import { ReactNode } from 'react';
import Contact from '../Contact';
import icon_insta from '../../../assets/img/icon-insta.svg';
import icon_phone from '../../../assets/img/icon-phone.svg';
import icon_email from '../../../assets/img/icon-email.svg';
import logo from '../../../assets/img/logo.png';
import { Container, Overlay, MainMenuMobile, Logo, Text, ListContact } from './styles';
type MenuMobileProps = {
    handleMenu(): void;
};
function MenuMobile({ handleMenu }: MenuMobileProps) {
    return (
        <Container>
            <Overlay onClick={handleMenu} />
            <MainMenuMobile data-aos="fade-right">
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
            </MainMenuMobile>
        </Container>
    );
}

export default MenuMobile;
