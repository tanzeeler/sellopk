import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
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

  const reviews = [
    {
      name: "Ahmed Raza",
      city: "Lahore",
      initials: "AR",
      quote: "Sold my Civic within 48 hours of posting. The process was incredibly smooth and I didn't have to deal with non-serious buyers thanks to the verified system."
    },
    {
      name: "Fatima Ali",
      city: "Karachi",
      initials: "FA",
      quote: "Found my perfect first car through a verified dealer on Sello. The EMI calculator helped me plan my budget exactly. Highly recommended platform!"
    },
    {
      name: "Usman Tariq",
      city: "Islamabad",
      initials: "UT",
      quote: "As a dealer, Sello has transformed our business. We get high-quality leads and the interface is way ahead of any other classified site in Pakistan."
    }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-background border-t border-[#EDEFF2]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-[800] font-heading text-[#0F172A] mb-10 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          What our customers say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white border border-[#EDEFF2] rounded-[0px] p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-secondary font-[700] font-heading">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-[700] font-heading text-[#0F172A] leading-tight">{review.name}</h4>
                  <p className="text-xs text-[#6B7280] font-body mb-1">{review.city}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#4B5563] font-body italic leading-relaxed">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
