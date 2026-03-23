import React from "react";
import { pageContent } from "../data/content";
import * as LucideIcons from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { sectionTitle, heading, items } = pageContent.services;

  return (
    <section
      id="services"
      className="w-full py-16 md:py-32 px-6 md:px-12 bg-beige relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* Sticky Left Sidebar for Section Title to break symmetry */}
        <div className="md:w-1/3 md:sticky top-32 z-10 pr-8">
          <div className="w-12 h-px bg-primary mb-6"></div>
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-6 text-xs">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-ink tracking-tight leading-[1.2] mb-8">
            {heading}
          </h3>
          <p className="text-secondary font-light leading-relaxed mb-8">
            Experience the intersection of advanced clinical precision and
            elevated artistic design. Our tailored treatments focus on longevity
            and harmony.
          </p>
        </div>

        {/* Asymmetrical Grid for Cards */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {items.map((item, idx) => {
            const IconComponent =
              LucideIcons[item.iconType] || LucideIcons.Smile;
            // Push every second card down to create asymmetry
            const offsetClass = idx % 2 !== 0 ? "sm:translate-y-16" : "";

            return (
              <Link
                to={`/services/${item.id}`}
                key={item.id}
                className={`group block p-10 rounded-[40px] bg-cream shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden border border-primary/5 ${offsetClass}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex flex-col justify-center items-center mb-10 group-hover:bg-primary transition-colors duration-500">
                  <IconComponent
                    className="w-7 h-7 text-primary group-hover:text-cream transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-2xl font-serif text-ink mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-secondary font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-primary font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>Explore</span>
                  <LucideIcons.ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
