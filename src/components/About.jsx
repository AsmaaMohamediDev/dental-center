import React from "react";
import { pageContent } from "../data/content";

const About = () => {
  const { sectionTitle, heading, paragraphs } = pageContent.about;

  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 bg-cream pb-48">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">
        {/* Soft edge-to-edge bleed feel using structural overlapping */}
        <div className="flex-1 w-full order-2 md:order-1 relative">
          <div className="absolute inset-y-8 -inset-x-8 bg-beige rounded-r-full -z-10 translate-x-[-10vw]"></div>
          <div className="relative w-full aspect-square md:aspect-[3/4] max-w-md mx-auto">
            <div className="w-full h-full bg-white rounded-t-full rounded-b-none overflow-hidden shadow-sm relative z-10 flex flex-col items-center justify-center text-primary/30 font-serif text-3xl italic border-x border-t border-primary/20 p-8 text-center">
              <span>Sanctuary of Healing</span>
            </div>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <div className="w-12 h-px bg-primary mb-6"></div>
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-6 text-xs">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-[3.25rem] font-serif text-ink tracking-tight mb-10 leading-[1.1]">
            {heading}
          </h3>
          <div className="space-y-6 text-lg text-secondary font-light leading-relaxed max-w-lg">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <button className="mt-12 group flex items-center gap-4 text-ink hover:text-primary transition-colors font-medium tracking-wide uppercase text-sm border-b border-ink hover:border-primary pb-1">
            Meet Our Team
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
