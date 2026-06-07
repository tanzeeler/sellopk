import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80",
    headline: "Find your next car, the smart way",
    subline: "Browse 12,000+ verified listings across Pakistan",
    cta: "Browse cars"
  },
  {
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
    headline: "Sell your car in minutes, for free",
    subline: "Post a free ad and reach 500+ trusted dealers",
    cta: "Post free ad"
  },
  {
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
    headline: "Verified listings, trusted dealers only",
    subline: "Every listing checked. Every dealer certified.",
    cta: "View verified cars"
  }
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="relative w-full aspect-[16/7] min-h-[500px] bg-[#050B20] overflow-hidden">
      {slides.map((slide, idx) => (
        <div 
          key={idx} 
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img 
              src={slide.image} 
              alt={slide.headline}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[5000ms] ease-linear ${
                idx === currentSlide ? 'scale-108' : 'scale-100'
              }`} 
              style={{ transform: idx === currentSlide ? 'scale(1.08)' : 'scale(1)' }}
            />
          </div>
          <div className="absolute inset-0 bg-[#050B20]/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-[800] font-heading mb-4 max-w-4xl tracking-tight leading-tight">
              {slide.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-body mb-8 max-w-2xl">
              {slide.subline}
            </p>
            <Button size="lg" className="rounded-[8px] bg-primary text-[#050B20] hover:bg-primary/90 text-base font-bold px-8 h-14">
              {slide.cta}
            </Button>
          </div>
        </div>
      ))}

      {/* Prev/Next arrows */}
      <button 
        onClick={() => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsPlaying(false); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={() => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsPlaying(false); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-32 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => { setCurrentSlide(idx); setIsPlaying(false); }}
            className="group relative h-1.5 w-12 rounded-full overflow-hidden bg-white/30"
          >
            {idx === currentSlide && isPlaying && (
              <div 
                className="absolute top-0 left-0 h-full bg-primary"
                style={{
                  width: '100%',
                  animation: 'progress 5s linear forwards'
                }}
              />
            )}
            {idx === currentSlide && !isPlaying && (
              <div className="absolute top-0 left-0 h-full w-full bg-primary" />
            )}
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />

      {/* Floating Quick Search Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 transform translate-y-1/2 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-[0px] p-5 shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <select className="w-full md:flex-1 h-12 px-4 rounded-[8px] bg-background border-border text-foreground font-body focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">Make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="suzuki">Suzuki</option>
            </select>
            <select className="w-full md:flex-1 h-12 px-4 rounded-[8px] bg-background border-border text-foreground font-body focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">Model</option>
              <option value="corolla">Corolla</option>
              <option value="civic">Civic</option>
              <option value="mehran">Mehran</option>
            </select>
            <select className="w-full md:flex-1 h-12 px-4 rounded-[8px] bg-background border-border text-foreground font-body focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">City</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <select className="w-full md:flex-1 h-12 px-4 rounded-[8px] bg-background border-border text-foreground font-body focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">Price Range</option>
              <option value="u10">Under 10 Lacs</option>
              <option value="10-30">10 - 30 Lacs</option>
              <option value="30-50">30 - 50 Lacs</option>
              <option value="a50">Above 50 Lacs</option>
            </select>
            <Button className="w-full md:w-auto h-12 px-8 rounded-[8px] bg-primary text-[#050B20] font-bold text-base hover:bg-primary/90 flex items-center gap-2">
              <Search className="w-5 h-5" /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
