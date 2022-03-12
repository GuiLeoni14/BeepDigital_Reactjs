import { ReactNode, useState } from 'react';
import { MainContainer } from '../../styles/container';
import logo from '../../assets/img/logo.png';
import { Container, MainHeader, Logo, Text, ListContact } from './styles';
import Contact from './Contact';
import icon_insta from '../../assets/img/icon-insta.svg';
import icon_phone from '../../assets/img/icon-phone.svg';
import icon_email from '../../assets/img/icon-email.svg';
import MenuMobile from './MenuMobile';
function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    function toggleMenu() {
        const body = document.querySelector('body');
        setOpenMenu(!openMenu);
        if (body) {
            body.style.overflow === 'hidden' ? (body.style.overflow = 'auto') : (body.style.overflow = 'hidden');
        }
    }
    return (
        <Container>
            <MainContainer>
                <MainHeader>
                    <Logo onClick={toggleMenu}>
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
                    {openMenu && <MenuMobile handleMenu={toggleMenu} />}
                </MainHeader>
            </MainContainer>
        </Container>
    );
}

export default Header;
