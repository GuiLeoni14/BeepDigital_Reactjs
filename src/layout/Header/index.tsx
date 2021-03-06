import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { MainContainer } from '../../styles/container';
import logo from '../../assets/img/logo.png';
import { Container, MainHeader, Logo, Text, ListContact, ButtonMenuMobile, IconToggleTheme } from './styles';
import Contact from './Contact';
import icon_insta from '../../assets/img/icon-insta.svg';
import icon_phone from '../../assets/img/icon-phone.svg';
import icon_email from '../../assets/img/icon-email.svg';
import icon_menu_mobile from '../../assets/img/menu-hamburger.svg';
import icon_dark from '../../assets/img/icon-moon.svg';
import icon_light from '../../assets/img/icon-son.svg';
import MenuMobile from './MenuMobile';
import { ThemeContext } from 'styled-components';
type HeaderProps = {
    toggleTheme(): void;
};
function Header({ toggleTheme }: HeaderProps) {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const {
        title,
        colors: { shadow },
    } = useContext(ThemeContext);

    useEffect(() => {
        function shadowHeader() {
            setScrollTop(window.pageYOffset);
            if (headerRef.current) {
                if (scrollTop >= 100) {
                    headerRef.current.style.boxShadow = `1rem 1rem 1rem ${shadow}`;
                } else {
                    headerRef.current.style.boxShadow = '';
                }
            }
        }
        window.addEventListener('scroll', shadowHeader);
        return () => window.removeEventListener('scroll', shadowHeader);
    }, [scrollTop, shadow]);

    function toggleMenu() {
        const body = document.querySelector('body');
        setOpenMenu(!openMenu);
        if (body) {
            body.style.overflow === 'hidden' ? (body.style.overflow = 'auto') : (body.style.overflow = 'hidden');
        }
    }
    return (
        <Container ref={headerRef}>
            <MainContainer>
                <MainHeader>
                    <Logo data-aos="fade-down">
                        <img src={logo} alt="" />
                    </Logo>
                    <Text>
                        H?? <span>26 anos</span> realizando viagens <span>inesquec??veis.</span>
                    </Text>
                    <ListContact data-aos="fade-down">
                        <Contact text="Siga-nos" description="@Totaltour" icon={icon_insta} />
                        <Contact text="Siga-nos" description="(11) 94953-0627" icon={icon_phone} />
                        <Contact text="Siga-nos" description="Leonardo@Totaltour.Com.Br" icon={icon_email} />
                    </ListContact>
                    <ButtonMenuMobile onClick={toggleMenu}>
                        <img src={icon_menu_mobile} />
                    </ButtonMenuMobile>
                    <IconToggleTheme src={title === 'dark' ? icon_light : icon_dark} onClick={toggleTheme} />
                    {openMenu && <MenuMobile handleMenu={toggleMenu} />}
                </MainHeader>
            </MainContainer>
        </Container>
    );
}

export default Header;
