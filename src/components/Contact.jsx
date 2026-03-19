import React from "react";
import { pageContent } from "../data/content";
import * as LucideIcons from "lucide-react";

const Contact = () => {
  const { sectionTitle, heading, description, info } = pageContent.contact;

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-12 bg-beige relative overflow-hidden"
    >
      <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-cream rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-6">
            {heading}
          </h3>
          <p className="text-lg text-secondary font-medium mb-12 max-w-md leading-relaxed">
            {description}
          </p>

          <div className="space-y-8">
            {info.map((item, idx) => {
              const IconComp = LucideIcons[item.iconType] || LucideIcons.Info;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cream flex justify-center items-center shadow-sm text-primary">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">
                      {item.type}
                    </h4>
                    <p className="text-lg font-bold text-ink">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 bg-cream p-8 md:p-12 rounded-[40px] shadow-2xl border border-primary/10">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-ink ml-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-beige/50 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-beige transition-colors font-medium text-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-ink ml-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+213 555 000 000"
                className="w-full bg-beige/50 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-beige transition-colors font-medium text-ink"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-ink ml-2">Message</label>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full bg-beige/50 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:bg-beige transition-colors font-medium text-ink resize-none"
              ></textarea>
            </div>
            <button className="bg-primary text-cream hover:opacity-90 transition-all font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
