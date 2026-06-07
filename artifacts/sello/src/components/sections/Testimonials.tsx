import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Ahmed Raza",
    city: "Lahore",
    initials: "AR",
    rating: 5,
    quote: "Sold my Civic within 48 hours of posting. The process was incredibly smooth and I didn't have to deal with non-serious buyers thanks to the verified system."
  },
  {
    name: "Fatima Ali",
    city: "Karachi",
    initials: "FA",
    rating: 5,
    quote: "Found my perfect first car through a verified dealer on Sello. The EMI calculator helped me plan my budget exactly. Highly recommended platform!"
  },
  {
    name: "Usman Tariq",
    city: "Islamabad",
    initials: "UT",
    rating: 5,
    quote: "As a dealer, Sello has transformed our business. We get high-quality leads and the interface is way ahead of any other classified site in Pakistan."
  },
  {
    name: "Sana Malik",
    city: "Rawalpindi",
    initials: "SM",
    rating: 5,
    quote: "I was skeptical at first but Sello proved me wrong. The dealer was certified, the car was exactly as described, and the price was fair. Will use again!"
  },
  {
    name: "Bilal Khan",
    city: "Faisalabad",
    initials: "BK",
    rating: 5,
    quote: "The comparison tool saved me so much time. I compared 5 cars side by side and made an informed decision within a day. Best car platform in Pakistan."
  },
  {
    name: "Nadia Hussain",
    city: "Multan",
    initials: "NH",
    rating: 5,
    quote: "Listed my car on a Sunday evening, had 12 genuine inquiries by Monday morning. The filtering system ensures only serious buyers reach out."
  },
  {
    name: "Zain ul Abideen",
    city: "Peshawar",
    initials: "ZA",
    rating: 4,
    quote: "Great platform with genuine listings. The photo quality of listings is much better than other sites and the contact process is streamlined and professional."
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    if (isPlaying) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying]);

  const go = (dir: number) => {
    setIsPlaying(false);
    setCurrent(prev => Math.max(0, Math.min(maxIndex, prev + dir)));
  };

  return (
    <section className="py-[80px] md:py-[110px] bg-[#F8F9FA] border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2 font-body">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-[800] font-heading text-[#0F172A] leading-tight">
              What our customers say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              disabled={current === 0}
              className="p-3 border border-[#EDEFF2] bg-white hover:bg-primary hover:border-primary hover:text-[#050B20] disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-[3px]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              disabled={current >= maxIndex}
              className="p-3 border border-[#EDEFF2] bg-white hover:bg-primary hover:border-primary hover:text-[#050B20] disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-[3px]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount}) - ${current} * (24px / ${visibleCount})))` }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[calc(33.333%-16px)] bg-white border border-[#EDEFF2] p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#EDEFF2]" />
                  ))}
                </div>
                <p className="text-[#4B5563] font-body italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-secondary font-[700] font-heading text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-[700] font-heading text-[#0F172A] text-sm leading-tight">{review.name}</h4>
                    <p className="text-xs text-[#6B7280] font-body">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsPlaying(false); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-primary' : 'w-3 bg-[#D1D5DB]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
