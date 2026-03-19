import React from "react";
import { pageContent } from "../data/content";
import * as LucideIcons from "lucide-react";

const Contact = () => {
  const { sectionTitle, heading, description, info } = pageContent.contact;

  return (
    <section
      id="contact"
      className="w-full py-32 px-6 md:px-12 bg-beige relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1 pr-0 lg:pr-10">
          <div className="w-12 h-px bg-primary mb-6"></div>
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-6 text-xs">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-ink tracking-tight mb-8 leading-[1.1]">
            {heading}
          </h3>
          <p className="text-lg text-secondary font-light mb-16 max-w-md leading-relaxed">
            {description}
          </p>

          <div className="space-y-10">
            {info.map((item, idx) => {
              const IconComp = LucideIcons[item.iconType] || LucideIcons.Info;
              return (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full border border-primary/20 flex justify-center items-center text-primary group-hover:bg-primary group-hover:text-cream transition-all duration-300">
                    <IconComp className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-secondary/60 uppercase tracking-[0.1em] mb-1">
                      {item.type}
                    </h4>
                    <p className="text-lg font-serif text-ink tracking-wide">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-cream p-10 md:p-14 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-primary/10 w-full relative">
            <div className="absolute top-0 right-10 w-20 h-px bg-primary/30"></div>
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-primary/20 pb-4 outline-none focus:border-primary transition-colors font-light text-ink placeholder:text-secondary/50 rounded-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-primary/20 pb-4 outline-none focus:border-primary transition-colors font-light text-ink placeholder:text-secondary/50 rounded-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <textarea
                  placeholder="How can we help you?"
                  rows={3}
                  className="w-full bg-transparent border-b border-primary/20 pb-4 outline-none focus:border-primary transition-colors font-light text-ink placeholder:text-secondary/50 resize-none rounded-none"
                ></textarea>
              </div>
              <button className="bg-ink text-cream hover:bg-secondary transition-all font-medium text-sm py-5 px-10 rounded-full w-full mt-6 tracking-wide uppercase">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
