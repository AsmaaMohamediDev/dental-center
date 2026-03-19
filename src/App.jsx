import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="w-full min-h-screen font-sans selection:bg-primary/30 selection:text-ink max-w-[1600px] mx-auto overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <footer className="w-full py-12 text-center text-secondary border-t border-primary/10 bg-cream">
        <p className="font-semibold text-sm">
          © 2026 DentaCare Center. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
