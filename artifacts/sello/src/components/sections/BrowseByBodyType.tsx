import { useEffect, useRef } from 'react';
import { CarFront, Truck, Truck as Suv, Car } from 'lucide-react'; // Placeholder icons for body types

export function BrowseByBodyType() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    const children = sectionRef.current?.querySelectorAll('.scroll-reveal');
    children?.forEach((child, index) => {
      (child as HTMLElement).style.transitionDelay = `${index * 60}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  const types = [
    { name: "Sedan", icon: Car },
    { name: "SUV", icon: Suv },
    { name: "Hatchback", icon: CarFront },
    { name: "Crossover", icon: Car },
    { name: "Pickup", icon: Truck },
    { name: "Van", icon: Truck },
    { name: "Coupe", icon: Car },
    { name: "MPV", icon: CarFront }
  ];

  return (
    <section className="py-[80px] bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-[800] font-heading mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 text-[#0F172A]">Browse by Body Type</h2>
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory hide-scrollbar">
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <button 
                key={idx}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center justify-center min-w-[120px] h-28 bg-white border border-[#EDEFF2] rounded-[8px] hover:border-primary hover:text-primary group snap-center flex-shrink-0"
              >
                <Icon className="w-10 h-10 mb-3 text-muted group-hover:text-primary transition-colors" />
                <span className="font-body font-semibold text-sm text-[#333333] group-hover:text-[#050B20] transition-colors">{type.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
