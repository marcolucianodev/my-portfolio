import { HeadBrand } from "../Header/styles";
import { Copy, FooterContainer, FooterContent } from "./styles";
import Logo from "../../assets/images/logo-ml-dark.png";
import SocialMedia from "../SocialMedia";
import { SocialMediaContainer } from "../SocialMedia/styles";

import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <HeadBrand>
                    <a href="/">
                        <img src={Logo} alt="Logo Marco Luciano" />
                    </a>
                </HeadBrand>
                <SocialMediaContainer>
                    <SocialMedia 
                        bg="none"
                        border="none"
                        color="var(--text-color)"
                        content={<FaLinkedinIn />}
                        height="2.4rem"
                        width="2.4rem"
                        url="https://www.linkedin.com/in/marcolucianodev/"
                        size="2rem"
                        title="Linkedin"
                    />
                    <SocialMedia 
                        bg="none"
                        border="none"
                        color="var(--text-color)"
                        content={<FaGithub />}
                        height="2.4rem"
                        width="2.4rem"
                        url="https://github.com/marcolucianodev"
                        size="2rem"
                        title="Github"
                    />
                    <SocialMedia 
                        bg="none"
                        border="none"
                        color="var(--text-color)"
                        content={<FaEnvelope />}
                        height="2.4rem"
                        width="2.4rem"
                        url="mailto:maurelio.sluciano@gmail.com"
                        size="2rem"
                        title="E-mail"
                    />
                    <SocialMedia 
                        bg="none"
                        border="none"
                        color="var(--text-color)"
                        content={<FaWhatsapp />}
                        height="2.4rem"
                        width="2.4rem"
                        url="
                        https://wa.me/+5531998202693?text=Fale%20com%20Marco%20Luciano"
                        size="2rem"
                        title="WhatsApp"
                    />
                </SocialMediaContainer>
                <Copy>
                    &copy; Marco Luciano <span>{new Date().getFullYear()}</span>
                </Copy>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;