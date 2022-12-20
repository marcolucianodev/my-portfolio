import { CloseMenu, MenuMobileContainer, MenuMobileList } from "./styles";

import { GrClose } from "react-icons/gr";
import { MenuItem } from "../styles";
import { SocialMediaContainer } from "../../SocialMedia/styles";
import SocialMedia from "../../SocialMedia";

import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
                            bg="none"
                            border="none"
                            color="var(--text-color)"
                            content={<FaLinkedinIn />}
                            height="3.6rem"
                            width="3.6rem"
                            size="3rem"
                            url="#"
                            title="Linkedin"
                        />
                        <SocialMedia 
                            bg="none"
                            border="none"
                            color="var(--text-color)"
                            content={<FaGithub />}
                            height="3.6rem"
                            width="3.6rem"
                            size="3rem"
                            url="#"
                            title="Github"
                        />
                        <SocialMedia 
                            bg="none"
                            border="none"
                            color="var(--text-color)"
                            content={<FaEnvelope />}
                            height="3.6rem"
                            width="3.6rem"
                            size="3rem"
                            url="#"
                            title="E-mail"
                        />
                        <SocialMedia 
                            bg="none"
                            border="none"
                            color="var(--text-color)"
                            content={<FaWhatsapp />}
                            height="3.6rem"
                            width="3.6rem"
                            size="3rem"
                            url="#"
                            title="WhatsApp"
                        />
                    </SocialMediaContainer>
                </MenuItem>
            </MenuMobileList>
        </MenuMobileContainer>
    )
}

export default MenuMobile;