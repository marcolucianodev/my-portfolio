import { 
    WrapContent 
} from "../../components/WrapContent/styles";

import About from "../../components/About";
import Works from "../../components/Works";
import Contact from "../../components/Contact";
import TopSection from "../../components/TopSection";

const Home = () => {
    return (
        <WrapContent>
            <TopSection />
            <About />
            <Works />
            <Contact />
        </WrapContent>
    )
}

export default Home;