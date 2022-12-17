import GlobalStyles from "./assets/GlobalStyles";
import MainRoutes from "./routes/routes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      
      <MainRoutes />

      <Footer />
    
    <GlobalStyles />
    </div>
  )
}

export default App
