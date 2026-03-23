import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/discover-our-clinic");
  };

  return (
    <main>
      <Hero onSecondaryClick={handleDiscoverClick} />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
