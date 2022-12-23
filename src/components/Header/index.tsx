import { HeadBrand, HeaderContainer, HeaderContent } from "./styles";

import Logo from "../../assets/images/logo-ml-dark.png";
import { Menu, MenuItem } from "../Menu/styles";
import { SocialMediaContainer } from "../SocialMedia/styles";

import { FaBars } from "react-icons/fa";
import { MenuMobileIcon } from "../Menu/MenuMobile/styles";
import SocialMedia from "../SocialMedia";

import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

type HeaderProps = {
    openMenu: () => void;
}

const Header = ({openMenu}: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeadBrand>
                    <a href="/">
                        <img src={Logo} alt="Logo Marco Luciano" />
                    </a>
               </HeadBrand>
                <Menu>
                    <MenuItem><a href="#top-section">Inicio</a></MenuItem>
                    <MenuItem><a href="#about-section">Sobre</a></MenuItem>
                    <MenuItem><a href="#works-section">Trabalhos</a></MenuItem>
                    <MenuItem><a href="#contact-section">Contato</a></MenuItem>
                </Menu>
                    <SocialMediaContainer mdisplay>
                        <SocialMedia 
                            bg="var(--text-color)"
                            border="none"
                            color="#FFF"
                            content={<FaLinkedinIn />}
                            height="2.4rem"
                            width="2.4rem"
                            size="2rem"
                            url="https://www.linkedin.com/in/marcolucianodev/"
                            title="Linkedin"
                        />
                        <SocialMedia 
                            bg="var(--text-color)"
                            border="none"
                            color="#FFF"
                            content={<FaGithub />}
                            height="2.4rem"
                            width="2.4rem"
                            size="2rem"
                            url="https://github.com/marcolucianodev"
                            title="Github"
                        />
                        <SocialMedia 
                            bg="var(--text-color)"
                            border="none"
                            color="#FFF"
                            content={<FaEnvelope />}
                            height="2.4rem"
                            width="2.4rem"
                            size="2rem"
                            url="mailto:maurelio.sluciano@gmail.com"
                            title="E-mail"
                        />
                        <SocialMedia 
                            bg="var(--text-color)"
                            border="none"
                            color="#FFF"
                            content={<FaWhatsapp />}
                            height="2.4rem"
                            width="2.4rem"
                            size="2rem"
                            url="
                            https://wa.me/+5531998202693?text=Fale%20com%20Marco%20Luciano"
                            title="WhatsApp"
                        />
                    </SocialMediaContainer>
                <MenuMobileIcon>
                    <FaBars onClick={openMenu} />
                </MenuMobileIcon>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;