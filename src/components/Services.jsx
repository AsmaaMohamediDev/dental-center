import React from "react";
import { Sparkles, Smile, ShieldCheck, Camera } from "lucide-react";

const Services = () => {
  const serviceItems = [
    {
      title: "Routine Exams",
      desc: "Comprehensive check-ups to keep your smile bright and healthy all year round.",
      icon: <Smile className="w-8 h-8 text-cream" />,
    },
    {
      title: "Digital Radiographs",
      desc: "Advanced x-ray technology for accurate and low-radiation diagnostics.",
      icon: <Camera className="w-8 h-8 text-cream" />,
    },
    {
      title: "Teeth Whitening",
      desc: "Professional whitening treatments to lift stains and enhance your confident smile.",
      icon: <Sparkles className="w-8 h-8 text-cream" />,
    },
    {
      title: "Preventative Care",
      desc: "Sealants, fluoride, and deep cleanings to protect against future decay.",
      icon: <ShieldCheck className="w-8 h-8 text-cream" />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 px-6 md:px-12 bg-beige relative border-t border-primary/10"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
          Premium Care You Can Value
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {serviceItems.map((item, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-[32px] bg-cream border border-primary/10 hover:border-primary/50 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all"></div>
            <div className="w-16 h-16 rounded-2xl bg-primary flex flex-col justify-center items-center mb-6 shadow-inner group-hover:bg-ink transition-colors relative z-10">
              {item.icon}
            </div>
            <h4 className="text-2xl font-bold text-ink mb-3 group-hover:text-primary transition-colors relative z-10">
              {item.title}
            </h4>
            <p className="text-secondary font-medium leading-relaxed relative z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
