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
                    <AboutImage src={ImageAbout} alt="Sobre - Marco Luciano" />
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