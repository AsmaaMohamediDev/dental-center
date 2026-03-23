import React from "react";
import { pageContent } from "../data/content";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SmileGallery = () => {
  const { gallery } = pageContent;

  return (
    <main className="w-full bg-cream py-16 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-12 hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="text-center mb-24">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase mb-6 text-xs">
            Transformations
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-ink tracking-tight mb-8">
            Smile Gallery
          </h1>
          <p className="text-xl text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            Real results for real patients. Explore our most remarkable smile transformations and see the NOVA difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {gallery.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-[40px] shadow-xl aspect-[16/9] mb-8 bg-beige">
                <div className="flex h-full">
                  <div className="flex-1 relative overflow-hidden">
                    <img 
                      src={item.beforeImageUrl} 
                      alt={`Before ${item.treatmentName}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-ink/70 text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                      Before
                    </div>
                  </div>
                  <div className="w-px bg-cream/20 z-10"></div>
                  <div className="flex-1 relative overflow-hidden">
                    <img 
                      src={item.afterImageUrl} 
                      alt={`After ${item.treatmentName}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary/90 text-cream text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <h3 className="text-3xl font-serif text-ink mb-4 group-hover:text-primary transition-colors">
                  {item.treatmentName}
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-primary font-semibold text-[10px] uppercase tracking-widest block mb-1">The Challenge</span>
                    <p className="text-secondary font-light leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-primary font-semibold text-[10px] uppercase tracking-widest block mb-1">Our Solution</span>
                    <p className="text-secondary font-light leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-beige p-16 md:p-24 rounded-[60px] border border-primary/10">
          <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8">Ready for your transformation?</h2>
          <p className="text-lg text-secondary mb-12 max-w-lg mx-auto font-light leading-relaxed">
            Every smile is unique. Book a personalized consultation to discuss your vision and let us help you achieve the results you deserve.
          </p>
          <button className="bg-primary text-cream hover:opacity-90 transition-all font-semibold py-5 px-12 rounded-full shadow-lg text-lg uppercase tracking-wider">
            Book Consultation
          </button>
        </div>
      </div>
    </main>
  );
};

export default SmileGallery;
