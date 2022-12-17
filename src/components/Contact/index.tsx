import { MainSection } from "../WrapContent/styles";
import { SectionTitle } from "../About/styles";
import { ContactContent, ContactImage, ContactItem, ContactItemsBox, ContactText } from "./styles";

import ContactImg from "../../assets/images/marco-luciano-image3.png";

import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialMediaContainer, SocialMediaItem } from "../SocialMedia/styles";

const Contact = () => {
    return (
        <MainSection>
            <div id="contact-section">
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
                            <SocialMediaItem
                                iconBg="#FFF"
                                iconColor="gray"
                                iconBorder="2px"
                                iconHeight="3.6rem"
                                iconWidth="3.6rem"
                            >
                                Face
                            </SocialMediaItem>
                            <SocialMediaItem
                                iconBg="#FFF"
                                iconColor="gray"
                                iconBorder="2px"
                                iconHeight="3.6rem"
                                iconWidth="3.6rem"
                            >
                                Gith
                            </SocialMediaItem>
                        </SocialMediaContainer>
                    </ContactText>
                    <ContactImage src={ContactImg} />
                </ContactContent>
            </div>
        </MainSection>
    )
}

export default Contact;