import { useEffect, useRef } from 'react';
import { Camera, RefreshCw, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SellSteps() {
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

  const steps = [
    { num: 1, title: "List", desc: "Add your car details and upload photos.", icon: Camera },
    { num: 2, title: "Connect", desc: "Get inquiries from verified buyers and dealers.", icon: RefreshCw },
    { num: 3, title: "Sell", desc: "Close the deal safely and get paid quickly.", icon: DollarSign }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-white mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          Sell your car in 3 steps
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-5xl mx-auto mb-12 relative">
          {/* Connector Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-white/20 z-0" />
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-center flex-1 relative z-10 w-full md:w-auto">
                <div className="w-20 h-20 bg-[#050B20] border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,166,2,0.15)]">
                  <span className="text-primary font-heading font-[800] text-3xl">{step.num}</span>
                </div>
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-[700] font-heading text-white mb-3">{step.title}</h3>
                <p className="text-white/70 font-body text-center max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <Button size="lg" className="rounded-[8px] bg-primary text-secondary font-bold hover:bg-primary/90 px-10 h-14 text-lg">
            Post your ad free
          </Button>
        </div>
      </div>
    </section>
  );
}
