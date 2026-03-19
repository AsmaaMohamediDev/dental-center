import React from "react";
import { Stethoscope } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 border-b border-primary/20 bg-cream sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Stethoscope className="w-8 h-8 text-primary" />
        <span className="text-2xl font-bold tracking-tight text-ink uppercase">
          DentaCare
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-secondary">
        <a href="#services" className="hover:text-primary transition-colors">
          Services
        </a>
        <a href="#about" className="hover:text-primary transition-colors">
          About Us
        </a>
        <a
          href="#testimonials"
          className="hover:text-primary transition-colors"
        >
          Testimonials
        </a>
      </div>
      <button className="hidden md:block bg-primary text-cream hover:opacity-90 transition-all font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
        Book Appointment
      </button>
    </nav>
  );
};

export default Navbar;
