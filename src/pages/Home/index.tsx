import { 
    HeadButtons,
    Headline, 
    MainSection, 
    TopSectionImage, 
    WrapContent 
} from "../../components/WrapContent/styles";

import TopImage  from "../../assets/images/marco-luciano-image1.png"; 
import { Button } from "../../components/Button/styles";
import { SocialMediaContainer, SocialMediaItem } from "../../components/SocialMedia/styles";

const Home = () => {
    return (
        <WrapContent>
            <MainSection>
                {/* <SocialMediaContainer>
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                    <SocialMediaItem />
                </SocialMediaContainer> */}
                <div>
                    <Headline>
                        Hello World!<br />
                        Eu sou Marco Luciano<br />
                        Desenvolvedor Front-end<br />
                        Bem-vindos ao meu<br />
                        <span>Portfólio</span>
                        
                    </Headline>
                    <HeadButtons>
                        <Button>Item Btn1</Button> 
                        <Button btn2>Item Btn1</Button>
                    </HeadButtons>
                </div>
                <TopSectionImage src={TopImage} />
            </MainSection>
        </WrapContent>
    )
}

export default Home;