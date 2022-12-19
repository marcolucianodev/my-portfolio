import { HeadBrand, HeaderContainer, HeaderContent } from "./styles";

import Logo from "../../assets/images/logo-ml-dark.png";
import { Menu, MenuItem, MenuMobileIcon } from "../Menu/styles";
import { Link } from "react-router-dom";
import { SocialMediaContainer, SocialMediaItem } from "../SocialMedia/styles";

import { FaBars } from "react-icons/fa";

type HeaderProps = {
    openMenu: () => void;
}

const Header = ({openMenu}: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeadBrand>
                    <img src={Logo} alt="Logo Marco Luciano" />
                </HeadBrand>
                <Menu>
                    <MenuItem><Link to="/">Inicio</Link></MenuItem>
                    <MenuItem><a href="#about-section">Sobre</a></MenuItem>
                    <MenuItem><a href="#works-section">Trabalhos</a></MenuItem>
                    <MenuItem><a href="#contact-section">Contato</a></MenuItem>
                </Menu>
                <SocialMediaContainer>
                    <SocialMediaItem 
                        iconBg="gray"
                        iconColor="#FFF"
                        iconHeight="2.4rem"
                        iconWidth="2.4rem"
                        iconBorder="none"
                    >
                        X
                    </SocialMediaItem>
                    <SocialMediaItem
                        iconBg="gray"
                        iconColor="#FFF"
                        iconHeight="2.4rem"
                        iconWidth="2.4rem"
                        iconBorder="none"
                    >
                        X
                    </SocialMediaItem>
                    <SocialMediaItem
                        iconBg="gray"
                        iconColor="#FFF"
                        iconHeight="2.4rem"
                        iconWidth="2.4rem"
                        iconBorder="none"
                    >
                        X
                    </SocialMediaItem>
                    <SocialMediaItem
                        iconBg="gray"
                        iconColor="#FFF"
                        iconHeight="2.4rem"
                        iconWidth="2.4rem"
                        iconBorder="none"
                    >
                        X
                    </SocialMediaItem>
                </SocialMediaContainer>
                <MenuMobileIcon>
                    <FaBars onClick={openMenu} />
                </MenuMobileIcon>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;