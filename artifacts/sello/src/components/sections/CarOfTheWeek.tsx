import { useState, useEffect, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/public-asset';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const carImages = [
  {
    src: publicAsset('car-of-week.jpg'),
    alt: 'Toyota Fortuner Sigma 4 — front exterior',
  },
  {
    src: publicAsset('listings/toyota-fortuner.jpg'),
    alt: 'Toyota Fortuner Sigma 4 — side profile',
  },
  {
    src: publicAsset('car-of-week/rear-view.jpg'),
    alt: 'Toyota Fortuner Sigma 4 — rear view',
  },
  {
    src: publicAsset('car-of-week/dashboard.jpg'),
    alt: 'Toyota Fortuner Sigma 4 — dashboard',
  },
  {
    src: publicAsset('car-of-week/interior.jpg'),
    alt: 'Toyota Fortuner Sigma 4 — interior seats',
  },
];

const specTags = ['2.8L Diesel', '5,000 km', 'Automatic', 'Attitude Black'];
const highlights = [
  'First Owner',
  'Dealership Maintained',
  'Bumper to Bumper Original',
  'Under Warranty',
];

const AUTOPLAY_INTERVAL = 4000;

export function CarOfTheWeek() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [autoPlayKey, setAutoPlayKey] = useState(0);

  const restartAutoPlay = useCallback(() => {
    setAutoPlayKey((key) => key + 1);
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [api, autoPlayKey]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
    restartAutoPlay();
  }, [api, restartAutoPlay]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
    restartAutoPlay();
  }, [api, restartAutoPlay]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
      restartAutoPlay();
    },
    [api, restartAutoPlay],
  );

  return (
    <section className="py-[80px] md:py-[110px] bg-[#FFF8E6]">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary font-body mb-1">
            Featured Pick
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] leading-tight">
            Car of the Week
          </h2>
        </div>

        <div className="bg-white border border-[#EDEFF2] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[58%]">
              <Carousel
                opts={{ loop: true }}
                setApi={setApi}
                className="w-full"
                data-testid="car-of-week-slider"
              >
                <div className="relative">
                  <CarouselContent className="ml-0">
                    {carImages.map((image, idx) => (
                      <CarouselItem key={idx} className="pl-0">
                        <div className="relative aspect-[4/3] bg-[#F1F3F5] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050B20]/50 to-transparent pointer-events-none" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="absolute top-4 right-4 z-10 bg-[#050B20]/70 text-white text-xs font-bold px-3 py-1.5 rounded-[3px] tracking-wider font-heading">
                    <span className="text-primary">{String(current + 1).padStart(2, '0')}</span>
                    <span className="text-white/50"> / {String(carImages.length).padStart(2, '0')}</span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                    <button
                      type="button"
                      onClick={scrollPrev}
                      className="w-10 h-10 flex items-center justify-center border border-white/80 bg-[#050B20]/70 text-white hover:bg-[#050B20]/90 transition-colors"
                      aria-label="Previous photo"
                      data-testid="car-of-week-prev"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      onClick={scrollNext}
                      className="w-10 h-10 flex items-center justify-center border border-white/80 border-l-0 bg-[#050B20]/70 text-white hover:bg-[#050B20]/90 transition-colors"
                      aria-label="Next photo"
                      data-testid="car-of-week-next"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </Carousel>

              <div className="flex gap-2 p-3 border-t border-[#EDEFF2] bg-[#FAFAFA] overflow-x-auto">
                {carImages.map((image, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollTo(idx)}
                    className={`relative shrink-0 w-16 h-12 md:w-20 md:h-14 overflow-hidden border-2 transition-all ${
                      idx === current
                        ? 'border-primary opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                    data-testid={`car-of-week-thumb-${idx}`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[42%] p-6 md:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#EDEFF2]">
              <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] font-bold text-xs px-3 py-1 rounded-[3px] mb-4 w-fit">
                Sello Verified
              </div>
              <h3 className="text-[20px] sm:text-xl md:text-2xl lg:text-3xl font-heading font-[800] text-[#0F172A] mb-2 leading-tight">
                2024 Toyota Fortuner Sigma 4
              </h3>
              <div className="text-[30px] sm:text-3xl md:text-4xl font-heading font-[800] text-primary mb-6">
                PKR 1,25,00,000
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {specTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#FFF8E6] border border-[#EDEFF2] text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-[3px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm font-body text-[#333333] font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#050B20]" />
                    </div>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 h-12 rounded-[3px] bg-primary text-[#050B20] font-bold text-base hover:bg-primary/90">
                  View details
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-[3px] border-[#0F172A] text-[#0F172A] font-bold text-base hover:bg-[#0F172A] hover:text-white"
                >
                  Contact dealer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
