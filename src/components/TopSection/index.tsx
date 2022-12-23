import { Button } from "../Button/styles";
import { MainSection } from "../WrapContent/styles";
import { HeadButtons, Headline, TopSectionContent, TopSectionImage } from "./styles";
import TopImage  from "../../assets/images/marco-luciano-image1.png"; 

const TopSection = () => {
    return (
        <MainSection>
            <div id="top-section">
                <div className="top-hidden"></div>
                <TopSectionContent>
                    <div>
                        <Headline>
                            Hello World!<br />
                            Eu sou Marco Luciano<br />
                            Desenvolvedor Front-end<br />
                            Bem-vindos ao meu<br />
                            <span>Portfólio</span>
                        </Headline>
                        <HeadButtons>
                            <a href="#contact-section"><Button>Vamos conversar ?</Button></a>
                            <a href="#works-section"><Button btn2>Meus Trabalhos</Button></a>
                        </HeadButtons>
                    </div>
                    <TopSectionImage src={TopImage} alt="Marco Luciano dev" />
                </TopSectionContent>
            </div>
        </MainSection>
    )
}

export default TopSection;