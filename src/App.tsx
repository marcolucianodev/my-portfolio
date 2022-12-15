import { Link } from "react-router-dom";
import GlobalStyles from "./assets/GlobalStyles";
import MainRoutes from "./routes/routes";

import { Button } from "./components/Button/styles";
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
            <MenuItem><a href="/">Inicio</a></MenuItem>
            <MenuItem><a href="/">Sobre</a></MenuItem>
            <MenuItem><a href="/">Habilidades</a></MenuItem>
            <MenuItem><a href="/">Trabalhos</a></MenuItem>
            <MenuItem><a href="/">Contato</a></MenuItem>
          </Menu>
        </HeaderContent>
      </Header>
      <MainRoutes />


      <h1>Marco Luciano</h1>
      <h2>Marco Luciano</h2>
      <h3>Marco Luciano</h3>
      <h4>Marco Luciano</h4>
      <h5>Marco Luciano</h5>
      <h6>Marco Luciano</h6>
      My Portfolio - Marco Luciano <br />
      <Button>Acesar Aqui</Button>
      <Button btn2>Botão 2</Button>
    
    <GlobalStyles />
    </div>
  )
}

export default App
