import { useRef } from 'react';
import { CarFront, Truck, Car } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const types = [
  { name: "Sedan",      icon: Car },
  { name: "SUV",        icon: Truck },
  { name: "Hatchback",  icon: CarFront },
  { name: "Crossover",  icon: Car },
  { name: "Pickup",     icon: Truck },
  { name: "Van",        icon: Truck },
  { name: "Coupe",      icon: Car },
  { name: "MPV",        icon: CarFront },
];

export function BrowseByBodyType() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-[60px] md:py-[80px] bg-background">
      <div className="container mx-auto px-4">

        {/* Header row */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[800] font-heading text-[#0F172A]">
            Browse by Body Type
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              className="p-2 md:p-2.5 border border-[#EDEFF2] bg-white hover:bg-primary hover:border-primary hover:text-[#050B20] transition-colors rounded-[3px]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2 md:p-2.5 border border-[#EDEFF2] bg-white hover:bg-primary hover:border-primary hover:text-[#050B20] transition-colors rounded-[3px]"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <button
                key={idx}
                className="flex flex-col items-center justify-center flex-shrink-0 snap-start
                           w-[calc(33.33%-8px)] sm:w-[calc(25%-10px)] md:w-[calc(20%-12px)] lg:w-[140px]
                           h-24 md:h-28 bg-white border border-[#EDEFF2] rounded-[3px]
                           hover:border-primary hover:text-primary group transition-all"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 mb-2 text-muted group-hover:text-primary transition-colors" />
                <span className="font-body font-semibold text-xs md:text-sm text-[#333333] group-hover:text-[#050B20] transition-colors">
                  {type.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        section .flex::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
