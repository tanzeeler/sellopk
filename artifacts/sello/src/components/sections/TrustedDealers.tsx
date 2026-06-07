import { useEffect, useRef } from 'react';
import { MapPin, Star, CheckCircle2 } from 'lucide-react';

export function TrustedDealers() {
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

  const dealers = [
    { name: "AutoHub Karachi", initials: "AH", listings: 128, city: "Karachi", rating: 5.0 },
    { name: "PakWheels Dealers", initials: "PW", listings: 340, city: "Lahore", rating: 4.8 },
    { name: "City Motors", initials: "CM", listings: 85, city: "Islamabad", rating: 4.9 },
    { name: "Prime Autos", initials: "PA", listings: 210, city: "Faisalabad", rating: 4.7 },
    { name: "Drive Line Dealership", initials: "DL", listings: 56, city: "Rawalpindi", rating: 4.9 },
    { name: "Elite Cars", initials: "EC", listings: 142, city: "Multan", rating: 5.0 }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          Trusted Dealers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map((dealer, idx) => (
            <div 
              key={idx} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white border border-[#EDEFF2] rounded-[0px] p-6 flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative">
                  <span className="text-secondary font-[800] font-heading text-xl">{dealer.initials}</span>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A] fill-[#16A34A]/20" />
                  </div>
                </div>
                <div>
                  <h3 className="font-[700] font-heading text-lg text-[#0F172A] mb-1">{dealer.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#6B7280] font-body font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {dealer.city}</span>
                    <span className="text-primary flex items-center gap-1 font-bold">
                      <Star className="w-4 h-4 fill-primary text-primary" /> {dealer.rating}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="h-px bg-[#EDEFF2] w-full my-4" />
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6B7280] font-medium font-body">{dealer.listings} listings</span>
                <span className="text-primary font-bold font-body hover:underline">View inventory &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
