import { HeadBrand } from "../Header/styles";
import { Copy, FooterContainer, FooterContent } from "./styles";
import Logo from "../../assets/images/logo-ml-dark.png";
import SocialMedia from "../SocialMedia";
import { SocialMediaContainer } from "../SocialMedia/styles";

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
                <Copy>
                    &copy; Marco Luciano <span>{new Date().getFullYear()}</span>
                </Copy>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;