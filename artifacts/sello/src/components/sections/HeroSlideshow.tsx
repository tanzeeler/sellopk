import { useState, useEffect, useRef, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilterSelect } from '@/components/ui/filter-select';
import { publicAsset } from '@/lib/public-asset';
import './hero-slider.css';

const DEFAULT_MOBILE_HERO_IMAGE = publicAsset('hero-mobile.webp');

const PHONE_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const slides = [
  {
    image: publicAsset('hero-slide-1.webp'),
    mobileImage: publicAsset('hero-mobile.webp'),
    alt: 'Find your next car',
    tag: "Pakistan's Smart Marketplace",
    title: (
      <>
        Find Your Next Car,
        <br />
        The <span>Smart</span> Way
      </>
    ),
    subline:
      'Browse 12,000+ verified listings across Pakistan — every car checked, every dealer certified.',
    cta: 'Browse Cars',
  },
  {
    image: publicAsset('hero-slide-2.jpg'),
    mobileImage: publicAsset('hero-mobile-slide-2.webp'),
    alt: 'Sell your car',
    tag: 'Free To List',
    title: (
      <>
        Sell Your Car in
        <br />
        <span>Minutes</span>, For Free
      </>
    ),
    subline: 'Post a free ad and reach 500+ trusted dealers actively looking to buy.',
    cta: 'Post Free Ad',
  },
  {
    image: publicAsset('hero-slide-3.jpg'),
    mobileImage: publicAsset('hero-mobile.webp'),
    alt: 'Verified listings',
    tag: 'Trusted Dealers Only',
    title: (
      <>
        <span>Verified</span> Listings,
        <br />
        Trusted Dealers Only
      </>
    ),
    subline: 'Every listing checked. Every dealer certified. Buy with total confidence.',
    cta: 'View Verified Cars',
  },
];

const SLIDE_INTERVAL = 5000;

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [autoPlayKey, setAutoPlayKey] = useState(0);
  const touchStartX = useRef(0);
  const currentSlideRef = useRef(0);
  const sliderRef = useRef<HTMLElement>(null);

  const restartAutoPlay = useCallback(() => {
    setAutoPlayKey((key) => key + 1);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(((index % slides.length) + slides.length) % slides.length);
      setProgressKey((key) => key + 1);
      restartAutoPlay();
    },
    [restartAutoPlay],
  );

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgressKey((key) => key + 1);
    restartAutoPlay();
  }, [restartAutoPlay]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgressKey((key) => key + 1);
    restartAutoPlay();
  }, [restartAutoPlay]);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    const next = (currentSlide + 1) % slides.length;
    [slides[currentSlide], slides[next]].forEach((slide) => {
      preload(slide.mobileImage ?? DEFAULT_MOBILE_HERO_IMAGE);
      preload(slide.image);
    });
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgressKey((key) => key + 1);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [autoPlayKey]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 50) {
        const cur = currentSlideRef.current;
        goTo(dx < 0 ? cur + 1 : cur - 1);
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [goTo]);

  return (
    <div className="relative w-full">
      <section
        ref={sliderRef}
        className="mp-slider"
        aria-label="Hero slider"
        data-testid="hero-slider"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`mp-slide${idx === currentSlide ? ' active' : ''}`}
          >
            <picture className="mp-bg-picture">
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileImage ?? DEFAULT_MOBILE_HERO_IMAGE}
                type="image/webp"
              />
              <img
                className="mp-bg"
                src={slide.image}
                alt={slide.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'low'}
                decoding={idx === 0 ? 'sync' : 'async'}
              />
            </picture>
            <div className="mp-content">
              <span className="mp-tag">{slide.tag}</span>
              <h1 className="mp-title">{slide.title}</h1>
              <p className="mp-sub">{slide.subline}</p>
              <div className="mp-btns">
                <a href="#" className="mp-btn-quote">
                  {slide.cta}
                </a>
                <a href="tel:+920000000000" className="mp-btn-call">
                  <div className="mp-call-icon">{PHONE_ICON}</div>
                  <div className="mp-call-text">
                    <span>Need Help?</span>
                    <strong>Call Our Team</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="mp-num" data-testid="hero-slide-number">
          <em>{String(currentSlide + 1).padStart(2, '0')}</em> / 0{slides.length}
        </div>

        <div className="mp-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`mp-dot${idx === currentSlide ? ' active' : ''}`}
              aria-label={`Slide ${idx + 1}`}
              data-testid={`button-slide-dot-${idx}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>

        <div className="mp-arrows">
          <button
            type="button"
            className="mp-arr"
            aria-label="Previous"
            data-testid="button-prev-slide"
            onClick={goPrev}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="mp-arr"
            aria-label="Next"
            data-testid="button-next-slide"
            onClick={goNext}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div key={progressKey} className="mp-progress go" />
      </section>

      <div className="relative z-30 w-full px-4 -mt-[36px]">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white shadow-2xl border border-[#EDEFF2] p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <FilterSelect testId="select-make" wrapperClassName="md:flex-1">
              <option value="">Make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="suzuki">Suzuki</option>
              <option value="kia">Kia</option>
              <option value="hyundai">Hyundai</option>
              <option value="mg">MG</option>
            </FilterSelect>
            <FilterSelect testId="select-model" wrapperClassName="md:flex-1">
              <option value="">Model</option>
              <option value="corolla">Corolla</option>
              <option value="civic">Civic</option>
              <option value="mehran">Mehran</option>
              <option value="alto">Alto</option>
              <option value="sportage">Sportage</option>
            </FilterSelect>
            <FilterSelect testId="select-city" wrapperClassName="md:flex-1">
              <option value="">City</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
              <option value="rawalpindi">Rawalpindi</option>
              <option value="faisalabad">Faisalabad</option>
            </FilterSelect>
            <FilterSelect testId="select-price" wrapperClassName="md:flex-1">
              <option value="">Price Range</option>
              <option value="u10">Under 10 Lac</option>
              <option value="10-20">10–20 Lac</option>
              <option value="20-40">20–40 Lac</option>
              <option value="40-70">40–70 Lac</option>
              <option value="a70">Above 70 Lac</option>
            </FilterSelect>
            <Button
              data-testid="button-search"
              className="w-full md:w-auto h-12 px-8 rounded-[3px] bg-primary text-[#050B20] font-bold text-base hover:bg-primary/90 flex items-center justify-center gap-2 shrink-0"
            >
              <Search className="w-5 h-5" /> Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
