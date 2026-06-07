import { useEffect, useRef } from 'react';

export function LatestBlog() {
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

  const articles = [
    {
      img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
      tag: "Buying Guide",
      title: "Best used SUVs under 40 lac in 2026",
      date: "Oct 12, 2026"
    },
    {
      img: "https://images.unsplash.com/photo-1632823471415-467f551c6c62?auto=format&fit=crop&w=800&q=80",
      tag: "Tips & Tricks",
      title: "How to inspect a used car before buying",
      date: "Oct 05, 2026"
    },
    {
      img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      tag: "Market Trends",
      title: "2026 car price trends in Pakistan",
      date: "Sep 28, 2026"
    }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-background border-t border-[#EDEFF2]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-8 md:mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          Latest from the blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article 
              key={idx}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white border border-[#EDEFF2] rounded-[0px] flex flex-col group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-start">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-[8px] mb-4">
                  {article.tag}
                </span>
                <h3 className="font-[700] font-heading text-xl text-[#0F172A] mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <div className="mt-auto w-full flex items-center justify-between text-sm">
                  <span className="text-[#6B7280] font-body">{article.date}</span>
                  <span className="text-primary font-bold font-body group-hover:underline">Read more &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
