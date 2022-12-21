import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../pages/Home";
import Works from "../components/Works";
import Modal from "../components/Modal";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Modal />} />
        </Routes>
    )
}

export default MainRoutes;