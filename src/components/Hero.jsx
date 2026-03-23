import React from "react";
import { pageContent } from "../data/content";

const Hero = ({ onSecondaryClick }) => {
  const { title, highlight, subtitle, primaryButton, secondaryButton, stats } =
    pageContent.hero;

  return (
    <section className="w-full min-h-[90vh] bg-cream flex flex-col md:flex-row items-center px-6 md:px-12 py-10 md:py-20 overflow-hidden relative border-b border-primary/10">
      {/* Soft Diffused Background Glow */}
      <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="flex-1 flex flex-col justify-center gap-10 py-10 z-10 md:pr-12 md:pl-8">
        {/* Editorial Serif Heading */}
        <h1 className="text-6xl md:text-[5.5rem] font-serif text-ink leading-[1.05] tracking-tight">
          {title} <br />{" "}
          <em className="text-primary italic font-medium">{highlight}</em>
        </h1>

        <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed font-light tracking-wide border-l-2 border-primary/30 pl-6 ml-2">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-6">
          <button type="button" className="bg-ink text-cream hover:bg-secondary transition-all duration-300 font-medium py-4 px-10 rounded-full shadow-[0_20px_40px_-10px_rgba(35,33,31,0.3)] hover:-translate-y-1 transform w-full sm:w-auto tracking-wide">
            {primaryButton}
          </button>
          <button
            type="button"
            onClick={onSecondaryClick}
            className="bg-transparent border border-primary text-secondary hover:bg-primary/5 transition-all duration-300 font-medium py-4 px-10 rounded-full w-full sm:w-auto tracking-wide"
          >
            {secondaryButton}
          </button>
        </div>

        <div className="mt-12 flex gap-6 md:gap-12 items-center flex-wrap pt-8 border-t border-primary/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <p className="text-4xl font-serif text-ink">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10 py-10 w-full mt-12 md:mt-0">
        {/* Architectural Image Framing (Arch) with Overlapping Stats */}
        <div className="relative w-full max-w-[480px]">
          {/* Subtle offset border */}
          <div className="absolute inset-x-4 -inset-y-4 border border-primary/30 rounded-t-full rounded-b-[40px] translate-y-8 -translate-x-8 -z-10"></div>

          <div className="relative aspect-[3/4] rounded-t-full rounded-b-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-beige">
            <img
              src="/hero-image.png"
              alt="Smiling Dental Patient"
              className="w-full h-full object-cover rounded-t-full rounded-b-[40px] scale-[1.03] hover:scale-100 transition-transform duration-[1.5s] ease-out origin-top"
            />
          </div>

          {/* Overlapping Badge */}
          <div className="absolute -left-10 bottom-24 bg-cream p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-primary/10 max-w-[200px] hidden md:block backdrop-blur-md bg-cream/90">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✨</span>
              <p className="font-serif text-lg font-bold text-ink">
                Premium Care
              </p>
            </div>
            <p className="text-xs text-secondary leading-relaxed font-medium">
              Bespoke aesthetic dentistry designed for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
