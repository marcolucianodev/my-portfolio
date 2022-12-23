import { useState } from "react";

import GlobalStyles from "./assets/GlobalStyles";
import MainRoutes from "./routes/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuMobile from "./components/Menu/MenuMobile";

const App = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  };

  return (
    <div style={{position:"relative"}}>

      {menuIsOpen &&
        <MenuMobile openMenu={openMenu}/>
      }
      
      <Header openMenu={openMenu} />
      
      <MainRoutes />

      <Footer />
    
    <GlobalStyles />
    </div>
  )
}

export default App
