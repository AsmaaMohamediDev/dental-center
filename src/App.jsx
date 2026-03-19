import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen font-sans selection:bg-primary/30 selection:text-ink max-w-[1600px] mx-auto overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="w-full py-12 text-center text-cream border-t border-primary/10 bg-ink">
        <p className="font-semibold text-sm">
          © 2026 DentaCare Center, Algiers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
