import React from "react";
import { pageContent } from "../data/content";

const About = () => {
  const { sectionTitle, heading, paragraphs } = pageContent.about;

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="w-full aspect-square md:aspect-[4/3] bg-beige rounded-[48px] overflow-hidden shadow-xl border-4 border-primary/10 relative">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="w-full h-full flex flex-col items-center justify-center text-primary/40 font-bold text-2xl">
              <span className="mb-2">🦷</span>
              State-of-the-Art Clinic
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-8">
            {heading}
          </h3>
          <div className="space-y-6 text-lg text-secondary font-medium leading-relaxed max-w-lg">
            {paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <button className="mt-8 bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-all font-semibold py-4 px-8 rounded-full shadow-sm">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
