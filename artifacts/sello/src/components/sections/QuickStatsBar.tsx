import { Car, Building2, MapPin, CheckCircle } from 'lucide-react';

export function QuickStatsBar() {
  return (
    <div className="bg-[#050B20] py-4 mt-8 md:mt-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-1 items-center justify-center gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
            <Car className="w-5 h-5 text-primary" />
            <span className="text-white font-heading font-bold text-lg">12,000+</span>
            <span className="text-white/80 font-body text-sm">Listings</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-white font-heading font-bold text-lg">500+</span>
            <span className="text-white/80 font-body text-sm">Dealers</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-white font-heading font-bold text-lg">30+</span>
            <span className="text-white/80 font-body text-sm">Cities</span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-3 w-full">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-white font-heading font-bold text-lg">8,500+</span>
            <span className="text-white/80 font-body text-sm">Cars Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
}
