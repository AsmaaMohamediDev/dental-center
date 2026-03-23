import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";

function App() {
  return (
    <div className="w-full min-h-screen font-sans selection:bg-primary/30 selection:text-ink max-w-[1600px] mx-auto overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
      </Routes>
      <footer className="w-full py-12 text-center text-cream border-t border-primary/10 bg-ink">
        <p className="font-semibold text-sm">
          © 2026 NOVA Dental Clinic, Algiers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
