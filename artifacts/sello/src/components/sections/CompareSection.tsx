import { GitCompareArrows, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/public-asset';

const compareCars = [
  {
    make: 'Honda',
    model: 'Civic',
    year: '2021',
    price: '55 Lac',
    image: publicAsset('compare-cars/honda-civic.png'),
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    year: '2021',
    price: '38.5 Lac',
    image: publicAsset('compare-cars/toyota-corolla.png'),
  },
];

const features = [
  "Engine specs & performance",
  "Fuel efficiency (km/l)",
  "Safety rating & features",
  "Maintenance costs",
  "Resale value history",
  "Dealer warranty details",
];

export function CompareSection() {
  return (
    <section className="py-[80px] md:py-[110px] bg-[#050B20] overflow-hidden relative">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-[920px] flex-col gap-12 lg:grid lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-8">

          {/* Left: mock compare UI */}
          <div className="w-full mx-auto lg:mx-0">
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <GitCompareArrows className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm font-body">Comparing 2 cars</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {compareCars.map((car, i) => (
                  <div key={i} className="bg-white/10 p-4 border border-white/10">
                    <div className="flex justify-center mb-3 h-14">
                      <img
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="h-full w-auto max-w-full object-contain drop-shadow-md"
                      />
                    </div>
                    <p className="text-white font-heading font-[700] text-sm">{car.make} {car.model}</p>
                    <p className="text-white/50 text-xs font-body">{car.year}</p>
                    <p className="text-primary font-[800] font-heading text-sm mt-1">PKR {car.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                {['Engine', 'Fuel', 'Safety', 'Warranty'].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-body">
                    <span className="text-white/40 w-16 shrink-0">{row}</span>
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/70 w-16 text-right">
                      {['1.5T 126hp', 'Hybrid', '5-star', '1 yr'][i]}
                    </span>
                    <div className="w-2" />
                    <span className="text-primary/80 w-16 text-right">
                      {['1.8L 140hp', 'Petrol', '4-star', '2 yr'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-md lg:max-w-none">
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3 font-body text-center lg:text-left">
                Smart Buying
              </p>
              <h2 className="text-[22px] sm:text-xl md:text-2xl lg:text-[32px] font-[800] font-heading text-white mb-5 text-center lg:text-left leading-snug">
                Compare cars side<br />by side, for free
              </h2>
              <p className="text-base lg:text-[17px] text-white/70 font-body mb-7 text-center lg:text-left leading-relaxed">
                <span className="md:hidden">Stop guessing. Our comparison</span>
                <span className="hidden md:inline">
                  Stop guessing. Our comparison tool puts specs, pricing, and history from multiple listings on one screen.
                </span>
              </p>
              <ul className="space-y-3 mb-8 w-fit mx-auto lg:mx-0 lg:w-full">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-body text-sm leading-normal text-left">
                    <CheckCircle2 className="w-[18px] h-[18px] text-primary shrink-0" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-start">
                <Button className="rounded-[3px] bg-primary text-[#050B20] font-bold px-8 h-12 text-base">
                  Start comparing now
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
