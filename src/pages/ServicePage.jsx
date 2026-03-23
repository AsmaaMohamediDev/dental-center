import React from "react";
import { useParams, Link } from "react-router-dom";
import { pageContent } from "../data/content";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ServicePage = () => {
  const { id } = useParams();
  const service = pageContent.serviceDetails[id];

  if (!service) {
    return (
      <main className="w-full min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-ink mb-4">Service Not Found</h2>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const { hero, intro, treatments, faqs, cta } = service;

  return (
    <main className="w-full bg-cream py-16 md:py-32 px-6 md:px-12">
      <Link to="/#services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-12 hover:-translate-x-1 transition-transform">
        <ArrowLeft className="w-4 h-4" /> Back to Services
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-serif text-ink tracking-tight mb-6">{hero.title}</h1>
            <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">{hero.subtitle}</p>
          </div>
          {hero.imageUrl && (
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-lg border border-primary/10">
                <img src={hero.imageUrl} alt={hero.title} className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Introduction */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm mb-20">
          <p className="text-lg md:text-xl text-ink leading-relaxed font-light">{intro}</p>
        </div>

        {/* Detailed Treatments */}
        <div className="mb-24">
          <h3 className="text-3xl font-serif text-ink tracking-tight mb-12 text-center">Detailed Treatments</h3>
          <div className="space-y-12">
            {treatments.map((treatment, idx) => (
              <div key={idx} className="bg-beige p-8 md:p-10 rounded-3xl border border-primary/10">
                <h4 className="text-primary font-semibold tracking-widest uppercase text-xs mb-3">{treatment.title}</h4>
                <h5 className="text-2xl font-serif text-ink mb-4">{treatment.name}</h5>
                <p className="text-secondary leading-relaxed mb-6">{treatment.desc}</p>
                <div className="flex items-start gap-3 bg-white/50 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-medium text-ink text-sm">Patient Benefit: <span className="font-normal text-secondary">{treatment.benefit}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24 max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif text-ink tracking-tight mb-12 text-center">Common Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-primary/5">
                <h5 className="text-xl font-medium text-ink mb-3">{faq.q}</h5>
                <p className="text-secondary leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-ink p-12 md:p-16 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <h3 className="text-3xl md:text-4xl font-serif text-cream mb-6 relative z-10">Ready for an Appointment?</h3>
          <p className="text-beige/80 text-lg mb-10 relative z-10 max-w-lg mx-auto leading-relaxed">{cta}</p>
          <button className="bg-primary text-cream hover:bg-white hover:text-ink transition-all duration-300 font-semibold py-4 px-10 rounded-full shadow-lg relative z-10 uppercase tracking-widest text-sm">
            Book Consultation
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
