import { MainSection, WrapContent } from "../../components/WrapContent/styles";
import { AboutContent, AboutImage, AboutText, SectionTitle, SkillSet } from "./styles";
import ImageAbout from "../../assets/images/marco-luciano-image2.png";
import { SocialMediaContainer, SocialMediaItem } from "../../components/SocialMedia/styles";
// import { LeakedButton } from "../../components/Button/styles";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa";


const About = () => {
    return (
        <WrapContent>
            <MainSection>
                <SocialMediaContainer>
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                </SocialMediaContainer>
                <div className="about-section">
                    <SectionTitle>Sobre</SectionTitle>
                    <AboutContent>
                        <AboutImage src={ImageAbout} />
                        <AboutText 
                            bgBtn="#FFF"
                            borderBtn="var(--third-color)"
                            colorBtn="var(--third-color)"
                        >
                            <h2>Olá!</h2>
                            <p>Eu sou o Marco Luciano, Desenvolvedor Front-end, atualmente morando em Minas Gerais, Brasil.</p>

                            <p>Como um profissional apaixonado e motivado, estou constantemente me esforçando para melhorar minhas técnicas, expandir minhas habilidades e encontrar novas oportunidades de crescimento.</p> 

                            <h3>Minhas Hard Skills:</h3>
                            <p>Javascript, Typescript, React, Context API, Consumo de API Rest, HTML, CSS, Styled-Components, Tailwind CSS, Git, Scrum.</p>
                            <SkillSet>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                                <div className="skill-icon"></div>
                            </SkillSet>
                            <div className="get-in-touch">
                                <Link to="/" className="leaked-button" style={{width:"17rem", justifyContent:"center"}}>Download CV <FaAngleRight /></Link>
                                <Link to="/contato" className="leaked-button">Entrar em contato <FaAngleRight /></Link>
                            </div>
                        </AboutText>
                    </AboutContent>
                </div>
            </MainSection>
        </WrapContent>
    )
}

export default About;