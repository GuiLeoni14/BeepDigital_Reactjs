import { ReactNode } from 'react';

import { Container, Overlay, MainMenuMobile } from './styles';
type MenuMobileProps = {
    handleMenu(): void;
};
function MenuMobile({ handleMenu }: MenuMobileProps) {
    return (
        <Container>
            <Overlay onClick={handleMenu} />
            <MainMenuMobile>
                <h1>Menu Mobile</h1>
            </MainMenuMobile>
        </Container>
    );
}

export default MenuMobile;
