import { useEffect, useRef, useState } from 'react';

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

function Counter({ target, duration = 2000, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = easeOutExpo(progress);
            
            setCount(Math.floor(easedProgress * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = new Intl.NumberFormat('en-US').format(count);

  return <span ref={nodeRef} className="text-[20px]">{formatted}{suffix}</span>;
}

export function StatsStrip() {
  const stats = [
    { label: "Cars Listed", target: 12000, suffix: "+" },
    { label: "Verified Dealers", target: 500, suffix: "+" },
    { label: "Cities", target: 30, suffix: "+" },
    { label: "Cars Sold", target: 8500, suffix: "+" }
  ];

  return (
    <section className="bg-secondary py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-[800] font-heading text-primary mb-2 tabular-nums">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 font-body text-sm md:text-base uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
