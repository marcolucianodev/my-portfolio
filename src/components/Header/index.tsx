import { HeadBrand, HeaderContainer, HeaderContent } from "./styles";

import Logo from "../../assets/images/logo-ml-dark.png";
import { Menu, MenuItem } from "../Menu/styles";
import { SocialMediaContainer } from "../SocialMedia/styles";

import { FaBars } from "react-icons/fa";
import { MenuMobileIcon } from "../Menu/MenuMobile/styles";
import SocialMedia from "../SocialMedia";

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
                            bg="red"
                            border="none"
                            color="blue"
                            content="X"
                            height="2.4rem"
                            width="2.4rem"
                            url="#"
                        />
                        <SocialMedia 
                            bg="red"
                            border="none"
                            color="blue"
                            content="X"
                            height="2.4rem"
                            width="2.4rem"
                            url="#"
                        />
                        <SocialMedia 
                            bg="red"
                            border="none"
                            color="blue"
                            content="X"
                            height="2.4rem"
                            width="2.4rem"
                            url="#"
                        />
                        <SocialMedia 
                            bg="red"
                            border="none"
                            color="blue"
                            content="X"
                            height="2.4rem"
                            width="2.4rem"
                            url="#"
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