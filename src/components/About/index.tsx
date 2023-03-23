import { MainSection } from "../WrapContent/styles";
import { AboutContent, AboutImage, AboutText, SectionTitle, SkillSet } from "./styles";
import ImageAbout from "../../assets/images/marco-luciano-image2.png";

import { FaAngleRight, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";

import TypescriptIcon from "../../assets/images/typescript.png"

const About = () => {
    return (
        <MainSection>
            <div id="about-section">
                <div className="hidden"></div>
                <SectionTitle>Sobre</SectionTitle>
                <AboutContent>
                    <AboutImage>
                        <img src={ImageAbout} alt="" />
                    </AboutImage>
                    <AboutText 
                        bgBtn="#FFF"
                        borderBtn="var(--third-color)"
                        colorBtn="var(--third-color)"
                    >
                        <h2>Olá!</h2>
                        <p>Sou um desenvolvedor frontend apaixonado por tecnologia com habilidades em diversas ferramentas. Minha experiência se concentra em tecnologias modernas como Javascript, Typescript e React, que utilizo para construir soluções escaláveis e eficientes.</p>

                        <p>Tenho experiência em consumir API Rest e utilizo HTML e CSS para criar interfaces intuitivas e amigáveis para o usuário. Além disso, utilizo o Styled-Components e o Tailwind CSS para criar estilos personalizados e garantir a consistência visual do projeto.</p> 

                        <p>Utilizo o Git como ferramenta de versionamento de código e possuo conhecimentos em metodologias ágeis, como o Scrum, para gerenciar projetos de forma eficiente.</p>

                        <p>Estou sempre em busca de novas tecnologias e tendências do mercado para oferecer soluções atualizadas e de alta qualidade para meus clientes e projetos.</p>

                        <h3>Minhas Habilidades:</h3>
                        <SkillSet>
                            <div className="skill-icon">
                                <FaJsSquare size={48} className="js" />
                                <span className="hint-icon">Javascript</span>
                            </div>
                            <div className="skill-icon">
                                <img src={TypescriptIcon} alt="Marco Luciano - Typescript Image" className="ts" />
                                <span className="hint-icon">Typescript</span>
                            </div>
                            <div className="skill-icon">
                                <FaReact size={48} className="react" />
                                <span className="hint-icon">React</span>
                            </div>
                            <div className="skill-icon">
                                <FaHtml5 size={48} className="html" />
                                <span className="hint-icon">HTML</span>
                            </div>
                            <div className="skill-icon">
                                <FaCss3Alt size={48} className="css" />
                                <span className="hint-icon">CSS</span>
                            </div>
                            <div className="skill-icon">
                                <FaGitAlt size={48} className="git"  />
                                <span className="hint-icon">Git</span>
                            </div>
                        </SkillSet>
                        <div className="get-in-touch">
                            <a href="/documents/cv-marcoluciano-dev.pdf" target="_blank" className="leaked-button" style={{width:"17rem", justifyContent:"center"}}>Download CV <FaAngleRight /></a>
                            <a href="#contact-section" className="leaked-button">Entrar em contato <FaAngleRight /></a>
                        </div>
                    </AboutText>
                </AboutContent>
            </div>
        </MainSection>
    )
}

export default About;