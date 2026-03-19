import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[85vh] bg-cream flex flex-col-reverse md:flex-row items-center px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-beige rounded-full blur-[100px] -z-10"></div>

      <div className="flex-1 flex flex-col justify-center gap-8 py-10 z-10 md:pr-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-ink leading-[1.1] tracking-tight">
          Modern Care for <br />{" "}
          <span className="text-primary">Healthy Smiles</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed font-medium">
          Providing gentle, thorough, and highly-advanced dental care. From
          regular cleanings to complex orthodontics, we're your dental friends.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
          <button className="bg-ink text-cream hover:bg-secondary transition-all font-semibold py-4 px-8 rounded-full shadow-lg hover:-translate-y-1 transform w-full sm:w-auto">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 transition-all font-semibold py-4 px-8 rounded-full w-full sm:w-auto">
            Learn More
          </button>
        </div>

        <div className="mt-8 flex gap-12 items-center">
          <div>
            <p className="text-4xl font-extrabold text-primary">4.9/5</p>
            <p className="text-sm font-semibold text-secondary mt-1">
              Patient Rating
            </p>
          </div>
          <div className="w-px h-12 bg-primary/30"></div>
          <div>
            <p className="text-4xl font-extrabold text-primary">5k+</p>
            <p className="text-sm font-semibold text-secondary mt-1">
              Happy Smiles
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative z-10 py-10 pb-0 md:pb-10 w-full mb-8 md:mb-0">
        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl bg-beige border-8 border-cream">
          <img
            src="/hero-image.png"
            alt="Smiling Dental Patient"
            className="w-full h-full object-cover rounded-[48px] scale-105 hover:scale-100 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
