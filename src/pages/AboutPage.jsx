import React from "react";
import { pageContent } from "../data/content";

const AboutPage = () => {
  const { coreValues, team } = pageContent.about;

  return (
    <main className="w-full bg-cream py-16 md:py-32 px-6 md:px-12">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-ink tracking-tight mb-6">Our Philosophy</h1>
        <p className="text-xl text-secondary font-light max-w-3xl mx-auto leading-relaxed">
          At NOVA Dental Clinic, we believe that a healthy, radiant smile is the foundation of your confidence and well-being. By combining cutting-edge dental technology with a gentle, personalized approach, we ensure every visit leaves you feeling fully supported, assured, and completely at ease.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="max-w-6xl mx-auto mb-32">
        <h3 className="text-3xl font-serif text-ink tracking-tight mb-12 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
              <h4 className="text-xl text-primary font-semibold mb-4">{value.title}</h4>
              <p className="text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto">
        <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
        <h3 className="text-3xl md:text-5xl font-serif text-ink tracking-tight mb-16 text-center">
          Meet the Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-center md:items-start group">
              <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-beige drop-shadow-md">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500">
                  <span className="font-serif text-5xl opacity-30">{member.name.charAt(4)}</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-serif text-ink mb-2">{member.name}</h4>
                <p className="text-primary font-medium tracking-wide uppercase text-xs mb-4">{member.role}</p>
                <p className="text-secondary leading-relaxed font-light">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
