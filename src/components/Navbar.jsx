import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 border-b border-primary/20 bg-cream sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="NOVA Dental Clinic Logo" className="w-10 h-10 object-contain" />
        <span className="text-xl md:text-2xl font-bold tracking-tight text-ink uppercase leading-none">
          NOVA <br className="hidden md:block" /><span className="text-sm md:text-base text-primary/80 font-semibold tracking-wider">Dental Clinic</span>
        </span>
      </Link>

      <button
        className="block md:hidden text-ink hover:text-primary transition-colors focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}

      >
        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-secondary">
        <a href="/#services" className="hover:text-primary transition-colors">
          Services
        </a>
        <a href="/#about" className="hover:text-primary transition-colors">
          About Us
        </a>
        <a
          href="/#testimonials"
          className="hover:text-primary transition-colors"
        >
          Testimonials
        </a>
        <Link to="/gallery" className="hover:text-primary transition-colors">
          Gallery
        </Link>
        <Link to="/patient-info" className="hover:text-primary transition-colors">
          FAQ
        </Link>
      </div>
      <button className="hidden md:block bg-primary text-cream hover:opacity-90 transition-all font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
        Book Appointment
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream border-b border-primary/20 flex flex-col items-center py-8 gap-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-2">
          <a href="/#services" className="text-lg font-semibold text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="/#about" className="text-lg font-semibold text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            About Us
          </a>
          <a
            href="/#testimonials"
            className="text-lg font-semibold text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <Link to="/gallery" className="text-lg font-semibold text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/patient-info" className="text-lg font-semibold text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <button className="bg-primary text-cream hover:opacity-90 transition-all font-semibold py-4 px-8 rounded-full shadow-lg mt-4 w-[85%] max-w-sm">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
