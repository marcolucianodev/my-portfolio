import { useState } from "react";

import GlobalStyles from "./assets/GlobalStyles";
import MainRoutes from "./routes/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { MenuItem, MenuMobile } from "./components/Menu/styles";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const App = () => {

  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu(!menu)
    console.log(!menu)
  };

  return (
    <div style={{position:"relative"}}>
      {menu &&
        <MenuMobile>
            <div className="close-menu">
              <GrClose size="30" onClick={openMenu}/>
            </div>
            <div className="menu-mobile-list">
              <MenuItem><Link to="/" onClick={()=> setMenu(false)}>Inicio</Link></MenuItem>
              <MenuItem><a href="#about-section" onClick={()=> setMenu(false)}>Sobre</a></MenuItem>
              <MenuItem><a href="#works-section" onClick={()=> setMenu(false)}>Trabalhos</a></MenuItem>
              <MenuItem><a href="#contact-section" onClick={()=> setMenu(false)}>Contato</a></MenuItem>
            </div>
        </MenuMobile>
      }
      
      <Header openMenu={openMenu} />
      
      <MainRoutes />

      <Footer />
    
    <GlobalStyles />
    </div>
  )
}

export default App
