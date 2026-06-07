import { useEffect, useRef } from 'react';
import { publicAsset } from '@/lib/public-asset';

export function BrowseByCity() {
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
      (child as HTMLElement).style.transitionDelay = `${index * 50}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  const cities = [
    { name: "Karachi", count: "3,200+", img: publicAsset("cities/karachi.jpg") },
    { name: "Lahore", count: "2,800+", img: publicAsset("cities/lahore.jpg") },
    { name: "Islamabad", count: "1,900+", img: publicAsset("cities/islamabad.jpg") },
    { name: "Rawalpindi", count: "1,100+", img: publicAsset("cities/rawalpindi.jpg") },
    { name: "Faisalabad", count: "890+", img: publicAsset("cities/faisalabad.jpg") },
    { name: "Multan", count: "650+", img: publicAsset("cities/multan.jpg") },
    { name: "Peshawar", count: "480+", img: publicAsset("cities/peshawar.jpg") },
    { name: "Quetta", count: "320+", img: publicAsset("cities/quetta.jpg") },
  ];

  return (
    <section className="py-[80px] bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-[800] font-heading text-[#0F172A] mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">Browse by City</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 relative aspect-[4/3] rounded-[0px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={city.img} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B20]/90 via-[#050B20]/40 to-transparent group-hover:from-[#050B20] transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-white font-[700] font-heading text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">{city.name}</h3>
                <p className="text-white/80 font-body text-xs md:text-sm font-medium">{city.count} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
