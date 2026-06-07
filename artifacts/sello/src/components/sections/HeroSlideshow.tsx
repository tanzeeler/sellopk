import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: "/hero-car-0.jpg",
    headline: "Find your next car, the smart way",
    subline: "Browse 12,000+ verified listings across Pakistan",
    cta: "Browse cars"
  },
  {
    image: "/hero-car-2.jpg",
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
    <div className="relative w-full">
      <section className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[16/7] min-h-[480px] sm:min-h-[560px] md:min-h-[640px] bg-[#050B20] overflow-hidden">
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
                className="w-full h-full object-cover object-center"
                style={{ transform: idx === currentSlide ? 'scale(1.08)' : 'scale(1)', transition: 'transform 5000ms linear' }}
              />
            </div>
            <div className="absolute inset-0 bg-[#050B20]/55" />

            {/* Content — padded enough on mobile so arrows never overlap text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-16 md:px-12 py-16">
              <h1
                className="sm:text-4xl md:text-5xl lg:text-6xl text-white font-[800] mb-4 max-w-3xl tracking-tight text-[40px]"
                style={{ fontFamily: "'Figtree', sans-serif" }}
              >
                {slide.headline}
              </h1>
              <p className="text-base md:text-xl text-white/90 font-body mb-8 max-w-2xl">
                {slide.subline}
              </p>
              <Button size="lg" className="rounded-[3px] bg-primary text-[#050B20] hover:bg-primary/90 text-base font-bold px-8 h-12 md:h-14">
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}

        {/* Arrows — smaller on mobile, pushed to bottom-ish on very small screens */}
        <button
          onClick={() => { setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); setIsPlaying(false); }}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/25 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => { setCurrentSlide((prev) => (prev + 1) % slides.length); setIsPlaying(false); }}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/25 text-white hover:bg-black/50 backdrop-blur-sm transition-colors"
          data-testid="button-next-slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Dot / progress indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentSlide(idx); setIsPlaying(false); }}
              className="relative h-1.5 w-10 rounded-full overflow-hidden bg-white/30"
              data-testid={`button-slide-dot-${idx}`}
            >
              {idx === currentSlide && isPlaying && (
                <div
                  className="absolute top-0 left-0 h-full bg-primary"
                  style={{ width: '100%', animation: 'heroProgress 5s linear forwards' }}
                />
              )}
              {idx === currentSlide && !isPlaying && (
                <div className="absolute top-0 left-0 h-full w-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes heroProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}} />
      </section>
      {/* Floating Quick Search Bar */}
      <div className="relative z-30 w-full px-4 -mt-[36px]">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white shadow-2xl border border-[#EDEFF2] p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <select
              data-testid="select-make"
              className="w-full md:flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">Make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="suzuki">Suzuki</option>
              <option value="kia">Kia</option>
              <option value="hyundai">Hyundai</option>
              <option value="mg">MG</option>
            </select>
            <select
              data-testid="select-model"
              className="w-full md:flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">Model</option>
              <option value="corolla">Corolla</option>
              <option value="civic">Civic</option>
              <option value="mehran">Mehran</option>
              <option value="alto">Alto</option>
              <option value="sportage">Sportage</option>
            </select>
            <select
              data-testid="select-city"
              className="w-full md:flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">City</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
              <option value="rawalpindi">Rawalpindi</option>
              <option value="faisalabad">Faisalabad</option>
            </select>
            <select
              data-testid="select-price"
              className="w-full md:flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">Price Range</option>
              <option value="u10">Under 10 Lac</option>
              <option value="10-20">10–20 Lac</option>
              <option value="20-40">20–40 Lac</option>
              <option value="40-70">40–70 Lac</option>
              <option value="a70">Above 70 Lac</option>
            </select>
            <Button
              data-testid="button-search"
              className="w-full md:w-auto h-12 px-8 rounded-[3px] bg-primary text-[#050B20] font-bold text-base hover:bg-primary/90 flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-5 h-5" /> Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
