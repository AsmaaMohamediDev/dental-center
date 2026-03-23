import React, { useState } from "react";
import { pageContent } from "../data/content";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Plus, Minus } from "lucide-react";

const PatientInfo = () => {
  const { pageIntro, firstVisitSteps, faqs } = pageContent.patientInfo;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full bg-cream">
      {/* Hero / Intro Section */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 md:px-12 bg-beige">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-12 hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-6 text-xs">
            Patient Information
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-ink tracking-tight mb-10">
            Everything You <br className="hidden md:block" />
            Need to Know
          </h1>
          <p className="text-lg md:text-xl text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            {pageIntro}
          </p>
        </div>
      </section>

      {/* First Visit Steps — Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-ink tracking-tight mb-6">
              Your First Visit
            </h2>
            <p className="text-secondary font-light max-w-lg mx-auto leading-relaxed">
              A simple, step-by-step journey from scheduling to treatment.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-20 relative">
            {/* Centre line (desktop only) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-primary/15 -translate-x-1/2"></div>

            {firstVisitSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`relative group ${
                    isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"
                  }`}
                >
                  {/* Connector dot on centre line */}
                  <div
                    className={`hidden md:flex absolute top-2 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary items-center justify-center text-primary font-bold text-sm z-10 group-hover:bg-primary group-hover:text-cream transition-all duration-300 ${
                      isLeft ? "-right-5 translate-x-1/2" : "-left-5 -translate-x-1/2"
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Mobile step number */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {step.stepNumber}
                    </div>
                    <h3 className="text-xl font-serif text-ink">{step.title}</h3>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-[0_4px_30px_-12px_rgba(0,0,0,0.06)] border border-primary/5 group-hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] group-hover:-translate-y-1 transition-all duration-500">
                    <h3 className="hidden md:block text-xl font-serif text-ink mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-secondary font-light leading-relaxed text-left">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-beige/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-ink tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary font-light max-w-lg mx-auto leading-relaxed">
              Clear answers to the questions our patients ask most.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-primary/20 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
                      : "border-primary/5 shadow-sm hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left cursor-pointer group"
                  >
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-ink group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-cream rotate-0"
                          : "bg-primary/10 text-primary rotate-0"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="w-full h-px bg-primary/10 mb-6"></div>
                      <p className="text-secondary font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-ink p-12 md:p-20 rounded-[50px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <h2 className="text-3xl md:text-5xl font-serif text-cream tracking-tight mb-6 relative z-10">
            Still have questions?
          </h2>
          <p className="text-beige/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed relative z-10">
            Our friendly team is always here to help. Reach out or book your consultation — we'd love to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/#contact"
              className="bg-primary text-cream hover:bg-white hover:text-ink transition-all duration-300 font-semibold py-4 px-10 rounded-full shadow-lg uppercase tracking-widest text-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300 font-semibold py-4 px-10 rounded-full uppercase tracking-widest text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PatientInfo;
