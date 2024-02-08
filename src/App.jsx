import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import CulturalEvents from "./components/CulturalEvents";
import TechnicalTimeline from "./components/TechnicalTimeline";
import SportsEvents from "./components/SportsEvents";
import EventSection from "./components/EventSection";
import Event from "./components/Event";

// import VerificationForm from "./components/VerificationForm";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cultural" element={<CulturalEvents />} />
        <Route path="/technical" element={<TechnicalTimeline />} />
        <Route path="/sports" element={<SportsEvents />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
