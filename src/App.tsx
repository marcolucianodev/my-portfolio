import { Link } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import MainRoutes from "./routes/routes";

import { 
  HeadBrand,
  Header, 
  HeaderContent 
} from "./components/Header/styles";
import { 
  Menu, 
  MenuItem 
} from "./components/Menu/styles";
import Logo from "./assets/images/logo-ml-dark.png";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header>
        <HeaderContent>
          <HeadBrand>
            <Link to="/">
              <img src={Logo} alt="Logo Marco Luciano" />
            </Link>
          </HeadBrand>
          <Menu>
            <MenuItem><Link to="/">Inicio</Link></MenuItem>
            <MenuItem><Link to="/sobre">Sobre</Link></MenuItem>
            <MenuItem><Link to="/trabalhos">Trabalhos</Link></MenuItem>
            <MenuItem><Link to="/contato">Contato</Link></MenuItem>
          </Menu>
        </HeaderContent>
      </Header>
      
      <MainRoutes />

      <Footer />
    
    <GlobalStyles />
    </div>
  )
}

export default App
