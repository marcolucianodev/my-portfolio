import { Button } from "../Button/styles";
import { MainSection } from "../WrapContent/styles";
import { HeadButtons, Headline, TopSectionImage } from "./styles";
import TopImage  from "../../assets/images/marco-luciano-image1.png"; 

const TopSection = () => {
    return (
        <MainSection>
            <div>
                <Headline>
                    Hello World!<br />
                    Eu sou Marco Luciano<br />
                    Desenvolvedor Front-end<br />
                    Bem-vindos ao meu<br />
                    <span>Portfólio</span>     
                </Headline>
                <HeadButtons>
                    <Button>Item 1</Button>
                    <Button btn2>Item 2</Button>
                </HeadButtons>
            </div>
            <TopSectionImage src={TopImage} />
        </MainSection>
    )
}

export default TopSection;