import { GitCompareArrows, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: mock compare UI */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-5">
                <GitCompareArrows className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm font-body">Comparing 2 cars</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { make: 'Honda', model: 'Civic', year: '2021', price: '55 Lac' },
                  { make: 'Toyota', model: 'Corolla', year: '2021', price: '38.5 Lac' },
                ].map((car, i) => (
                  <div key={i} className="bg-white/10 p-4 border border-white/10">
                    <div className="text-3xl mb-2 text-center">🚗</div>
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
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3 font-body">Smart Buying</p>
            <h2 className="md:text-5xl font-[800] font-heading text-white mb-6 text-[23px]">
              Compare cars side<br/>by side, for free
            </h2>
            <p className="text-lg text-white/70 font-body mb-8 max-w-md mx-auto lg:mx-0">
              Stop guessing. Our comparison tool puts specs, pricing, and history from multiple listings on one screen.
            </p>
            <ul className="space-y-3 mb-10 inline-block text-left">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-body text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div>
              <Button className="rounded-[3px] bg-primary text-[#050B20] font-bold px-8 h-12 text-base">
                Start comparing now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
