import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The most pain-free dental experience I've ever had. Dr. Smith and the team are incredibly gentle and explain every step of the process. My new Hollywood smile is perfect!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "From start to finish, the service was impeccable. The clinic's aesthetic is beautiful and instantly calming. I came in for an implant and felt no discomfort at all.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    text: "Highly professional and genuinely caring staff. The teeth whitening procedure was fast and yielded fantastic results without any sensitivity. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "James Arthur",
    text: "I used to suffer from severe dental anxiety, but the welcoming environment here changed everything. I can finally go to the dentist without dreading it.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Kim",
    text: "State-of-the-art technology and a team that treats you like family. They designed a custom treatment plan that worked perfectly with my schedule and budget.",
    rating: 5,
  },
  {
    id: 6,
    name: "Olivia Martinez",
    text: "I've been looking for a reliable clinic for years. The attention to detail during my veneer consultation was astonishing. Truly premium care.",
    rating: 5,
  },
];

const Testimonials = () => {
  // Duplicate array for infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-cream overflow-hidden border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
        <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-4 text-xs">
          Patient Stories
        </h2>
        <h3 className="text-4xl md:text-[3.25rem] font-serif text-ink tracking-tight leading-[1.1]">
          What Our Patients Say
        </h3>
      </div>

      <div className="relative flex overflow-hidden group py-10">
        {/* Soft edge fade for marquee */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>

        {/* Track */}
        <div className="flex gap-6 md:gap-8 w-max px-6 animate-marquee group-hover:[animation-play-state:paused] transition-all duration-300">
          {scrollItems.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="bg-beige w-[300px] sm:w-[380px] p-8 md:p-10 rounded-[40px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 border border-primary/5 flex flex-col justify-between flex-shrink-0 cursor-default"
            >
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-secondary font-light leading-relaxed mb-10 text-lg">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-ink text-lg font-medium">{testimonial.name}</p>
                  <p className="text-[10px] text-secondary/60 uppercase tracking-[0.15em] mt-1 font-bold">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
