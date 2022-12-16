import { Link } from "react-router-dom";
import { HeadBrand } from "../Header/styles";
import { Copy, FooterContainer, FooterContent, SocialMediaItem, SocialMedias } from "./styles";
import Logo from "../../assets/images/logo-ml-dark.png";

const data = new Date().getFullYear();
console.log(data)

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <HeadBrand>
                    <Link to="/">
                        <img src={Logo} alt="Logo Marco Luciano" />
                    </Link>
                </HeadBrand>
                <SocialMedias>
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                </SocialMedias>
                <Copy>
                    &copy; Marco Luciano <span>{data}</span>
                </Copy>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer;