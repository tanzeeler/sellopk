import { Flame, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const deals = [
  {
    make: "Toyota",
    model: "Corolla GLi",
    year: 2021,
    price: "38.5 Lac",
    original: "42 Lac",
    mileage: "28,000 km",
    city: "Lahore",
    tag: "Price Drop",
    color: "bg-red-500",
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    make: "Honda",
    model: "Civic Turbo",
    year: 2020,
    price: "55 Lac",
    original: "61 Lac",
    mileage: "42,000 km",
    city: "Karachi",
    tag: "Hot Deal",
    color: "bg-primary",
    fuel: "Petrol",
    transmission: "CVT",
  },
  {
    make: "Suzuki",
    model: "Swift",
    year: 2022,
    price: "22 Lac",
    original: "25.5 Lac",
    mileage: "15,000 km",
    city: "Islamabad",
    tag: "Urgent Sale",
    color: "bg-orange-500",
    fuel: "Petrol",
    transmission: "Manual",
  },
  {
    make: "Kia",
    model: "Sportage AWD",
    year: 2021,
    price: "68 Lac",
    original: "76 Lac",
    mileage: "33,000 km",
    city: "Rawalpindi",
    tag: "Best Value",
    color: "bg-emerald-600",
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

export function HotDeals() {
  return (
    <section className="py-[80px] md:py-[110px] bg-white border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2 font-body flex items-center gap-1.5">
              <Flame className="w-4 h-4" /> Limited Time
            </p>
            <h2 className="text-3xl md:text-4xl font-[800] font-heading text-[#0F172A] leading-tight">
              Hot Deals This Week
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2 rounded-[3px]">
            View all deals <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="group border border-[#EDEFF2] hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image placeholder with tag */}
              <div className="relative h-44 bg-gradient-to-br from-[#F1F3F5] to-[#E8EAED] overflow-hidden">

                <span className={`absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-[3px] ${deal.color}`}>
                  {deal.tag}
                </span>
                <div className="absolute bottom-3 right-3 bg-white/90 text-[10px] font-bold text-[#0F172A] px-2 py-1 rounded-[3px]">
                  {deal.city}
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs text-[#6B7280] font-body mb-1">{deal.year} · {deal.mileage} · {deal.transmission}</p>
                <h3 className="font-[800] font-heading text-[#0F172A] text-lg leading-tight mb-2">
                  {deal.make} {deal.model}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-[800] font-heading text-primary">PKR {deal.price}</span>
                  <span className="text-sm text-[#9CA3AF] line-through font-body">{deal.original}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="rounded-[3px] gap-2">
            View all deals <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
