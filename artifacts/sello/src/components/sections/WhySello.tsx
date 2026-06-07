import { useEffect, useRef } from 'react';
import { ShieldCheck, Users, SlidersHorizontal, MessageSquare } from 'lucide-react';

export function WhySello() {
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
      (child as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Listings",
      desc: "Every car goes through a multi-point verification process."
    },
    {
      icon: Users,
      title: "Trusted Dealers",
      desc: "Connect with certified dealerships across Pakistan."
    },
    {
      icon: SlidersHorizontal,
      title: "Smart Filters",
      desc: "Find exactly what you want with our advanced search tools."
    },
    {
      icon: MessageSquare,
      title: "Secure Contact",
      desc: "Communicate safely with sellers through our platform."
    }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-background border-t border-[#EDEFF2]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-4">Why choose Sello?</h2>
          <p className="text-lg text-[#6B7280] font-body">We're changing how Pakistan buys and sells cars. More transparency, less hassle.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white border border-[#EDEFF2] rounded-[0px] p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-[8px] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-[700] font-heading text-xl text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="font-body text-[#6B7280] leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
