import { CloseMenu, MenuMobileContainer, MenuMobileList } from "./styles";

import { GrClose } from "react-icons/gr";
import { MenuItem } from "../styles";
import { SocialMediaContainer } from "../../SocialMedia/styles";
import SocialMedia from "../../SocialMedia";

type MenuMobileProps = {
    openMenu: () => void
}

const MenuMobile = ({openMenu}: MenuMobileProps) => {

    return (
        <MenuMobileContainer>
            <CloseMenu>
                <GrClose size="30" onClick={openMenu}/>
            </CloseMenu>
            <MenuMobileList>
                <MenuItem><a href="#top-section" onClick={openMenu}>Inicio</a></MenuItem>
                <MenuItem><a href="#about-section" onClick={openMenu}>Sobre</a></MenuItem>
                <MenuItem><a href="#works-section" onClick={openMenu}>Trabalhos</a></MenuItem>
                <MenuItem><a href="#contact-section" onClick={openMenu}>Contato</a></MenuItem>
                <MenuItem>
                    <SocialMediaContainer>
                        <SocialMedia 
                            bg="gray"
                            border="none"
                            color="#FFF"
                            height="3.6rem"
                            width="3.6rem"
                            content="X"
                            url="#"
                        />
                        <SocialMedia 
                            bg="gray"
                            border="none"
                            color="#FFF"
                            height="3.6rem"
                            width="3.6rem"
                            content="X"
                            url="#"
                        />
                        <SocialMedia 
                            bg="gray"
                            border="none"
                            color="#FFF"
                            height="3.6rem"
                            width="3.6rem"
                            content="X"
                            url="#"
                        />
                        <SocialMedia 
                            bg="gray"
                            border="none"
                            color="#FFF"
                            height="3.6rem"
                            width="3.6rem"
                            content="X"
                            url="#"
                        />
                    </SocialMediaContainer>
                </MenuItem>
            </MenuMobileList>
        </MenuMobileContainer>
    )
}

export default MenuMobile;