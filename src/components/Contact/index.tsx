import { MainSection } from "../WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { ContactContent, ContactImage, ContactItem, ContactItemsBox, ContactText } from "./styles";

import ContactImg from "../../assets/images/marco-luciano-image3.png";

import { FaWhatsapp, FaRegEnvelope, FaLinkedinIn , FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialMediaContainer } from "../SocialMedia/styles";
import SocialMedia from "../SocialMedia";

const Contact = () => {
    return (
        <MainSection>
            <div id="contact-section">
                <div className="hidden"></div>
                <SectionTitle>Contato</SectionTitle>
                <ContactContent>
                    <ContactText>
                        <h2>
                            Vamos trabalhar juntos?<br />
                            Então vamos nos conectar!
                        </h2>
                        <p>Estou sempre aberto a novos projetos e desafios. Qualquer dúvida ou pergunta, é só me enviar uma mensagem. Eu irei responderei o mais breve possível.</p>
                        <ContactItemsBox>
                            <Link to="/" title="E-mail">
                                <ContactItem
                                    contactIconBg="var(--envelop-icon)"
                                >
                                    <FaRegEnvelope /> Enviar e-mail
                                </ContactItem>
                            </Link>
                            <Link to="/" target="_blank" title="WhatsApp">
                                <ContactItem
                                    contactIconBg="var(--whatsapp-icon)"
                                >
                                    <FaWhatsapp /> Enviar mensagem
                                </ContactItem>
                            </Link>
                        </ContactItemsBox>
                        <SocialMediaContainer>
                            <SocialMedia 
                                bg="var(--linkedin-icon)"
                                border="none"
                                color="#FFF"
                                height="3.6rem"
                                width="3.6rem"
                                content={<FaLinkedinIn />}
                                url="#"
                                size="3rem"
                                title="Linkedin"
                            />
                            <SocialMedia 
                                bg="var(--github-icon)"
                                border="none"
                                color="#FFF"
                                height="3.6rem"
                                width="3.6rem"
                                content={<FaGithub />}
                                url="#"
                                size="3rem"
                                title="Github"
                            />
                        </SocialMediaContainer>
                    </ContactText>
                    <ContactImage src={ContactImg} />
                </ContactContent>
            </div>
        </MainSection>
    )
}

export default Contact;