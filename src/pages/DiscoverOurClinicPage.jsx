import React from "react";
import { pageContent } from "../data/content";
import { Link } from "react-router-dom";

const DiscoverOurClinicPage = () => {
  const { discoverOurClinic } = pageContent;
  const philosophyParagraphs = discoverOurClinic.ourPhilosophy.split("\n\n");

  return (
    <main className="w-full bg-[#fcfbf9] px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden relative">
      {/* Soft diffused background glows */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[90px] -z-10" />
      <div className="absolute top-72 -right-32 w-[520px] h-[520px] bg-primary/15 rounded-full blur-[120px] -z-10" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-[1.05]">
          {discoverOurClinic.hero.title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-secondary font-light max-w-3xl mx-auto leading-relaxed">
          {discoverOurClinic.hero.subtitle}
        </p>
      </section>

      {/* Our Philosophy */}
      <section className="max-w-6xl mx-auto mt-14 md:mt-20">
        <div className="bg-white/70 border border-primary/10 rounded-3xl shadow-sm px-6 md:px-10 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-serif text-ink tracking-tight">
            Our Philosophy
          </h2>
          <div className="mt-6 text-secondary font-light leading-relaxed text-base md:text-lg space-y-5">
            {philosophyParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Highlights */}
      <section className="max-w-6xl mx-auto mt-14 md:mt-22">
        <h2 className="text-3xl md:text-4xl font-serif text-ink tracking-tight text-center">
          Clinic Highlights
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {discoverOurClinic.clinicHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/60 border border-primary/10 rounded-2xl p-7 md:p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-serif text-primary/90 tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-secondary font-light leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 h-px bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto mt-14 md:mt-22">
        <Link
          to="/about"
          className="block text-center"
          aria-label="Go to About - Meet the Team"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-ink tracking-tight text-center hover:text-primary transition-colors">
            Meet the Team
          </h2>
        </Link>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {discoverOurClinic.team.map((member, idx) => (
            <article
              key={idx}
              className="bg-white/60 border border-primary/10 rounded-3xl shadow-sm overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-7 md:gap-8 items-center md:items-start">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-beige shadow-sm bg-slate-200">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-serif text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-primary font-semibold tracking-wide uppercase text-xs md:text-sm">
                    {member.specialty}
                  </p>
                  <p className="mt-4 text-secondary font-light leading-relaxed text-base md:text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-6xl mx-auto mt-14 md:mt-22">
        <div className="rounded-3xl border border-primary/10 bg-[#f7f5ef] shadow-sm px-6 md:px-10 py-12 md:py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight">
            {discoverOurClinic.bottomCta.headline}
          </h2>
          <p className="mt-4 text-secondary font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            {discoverOurClinic.bottomCta.subheadline}
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center bg-ink text-cream hover:bg-secondary transition-all font-semibold py-4 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </main>
  );
};

export default DiscoverOurClinicPage;

