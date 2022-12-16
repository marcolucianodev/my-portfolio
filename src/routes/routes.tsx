import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Works from "../pages/Works";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/trabalhos" element={<Works />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    )
}

export default MainRoutes;