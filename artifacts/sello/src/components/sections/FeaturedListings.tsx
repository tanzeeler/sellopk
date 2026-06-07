import { useEffect, useRef } from 'react';
import { Heart, Gauge, MapPin, Droplet, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FilterSelect } from '@/components/ui/filter-select';
import { publicAsset } from '@/lib/public-asset';

export function FeaturedListings() {
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
      (child as HTMLElement).style.transitionDelay = `${index * 60}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, []);

  const cars = [
    { id: 1, title: "2022 Toyota Corolla Altis", price: "PKR 42,50,000", mileage: "45,000 km", city: "Lahore", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80", badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "AutoHub Lahore" },
    { id: 2, title: "2021 Honda Civic Oriel", price: "PKR 38,00,000", mileage: "52,000 km", city: "Karachi", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80", badge: "Featured", badgeColor: "bg-[#FFA602] text-[#050B20]", dealer: "CarZone Karachi" },
    { id: 3, title: "2023 Kia Sportage FWD", price: "PKR 75,00,000", mileage: "12,000 km", city: "Islamabad", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", badge: "Sold", badgeColor: "bg-[#B91C1C]", dealer: "PakMotors" },
    { id: 4, title: "2020 Suzuki Swift GLX", price: "PKR 28,50,000", mileage: "68,000 km", city: "Lahore", fuel: "Petrol", trans: "Manual", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "AutoHub Lahore" },
    { id: 5, title: "2022 Hyundai Tucson AWD", price: "PKR 82,00,000", mileage: "18,000 km", city: "Faisalabad", fuel: "Petrol", trans: "Automatic", img: publicAsset("listings/hyundai-tucson.jpg"), badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "City Cars" },
    { id: 6, title: "2019 Toyota Yaris GLX", price: "PKR 32,00,000", mileage: "55,000 km", city: "Multan", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&w=800&q=80", badge: "Featured", badgeColor: "bg-[#FFA602] text-[#050B20]", dealer: "Prime Autos" },
    { id: 7, title: "2024 MG HS Essence", price: "PKR 89,00,000", mileage: "5,000 km", city: "Islamabad", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=800&q=80", badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "Capital Motors" },
    { id: 8, title: "2018 Honda City Aspire", price: "PKR 26,50,000", mileage: "82,000 km", city: "Rawalpindi", fuel: "Petrol", trans: "Manual", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80", badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "Pindi Autos" },
    { id: 9, title: "2021 Changan Alsvin Lumiere", price: "PKR 34,00,000", mileage: "40,000 km", city: "Lahore", fuel: "Petrol", trans: "Automatic", img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80", badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "Drive Motors" },
    { id: 10, title: "2023 Haval H6 HEV", price: "PKR 1,05,00,000", mileage: "10,000 km", city: "Karachi", fuel: "Hybrid", trans: "Automatic", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80", badge: "Featured", badgeColor: "bg-[#FFA602] text-[#050B20]", dealer: "Karachi Auto Deal" },
    { id: 11, title: "2017 Suzuki Cultus VXR", price: "PKR 18,50,000", mileage: "95,000 km", city: "Peshawar", fuel: "Petrol", trans: "Manual", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", badge: "Sold", badgeColor: "bg-[#B91C1C]", dealer: "KPK Motors" },
    { id: 12, title: "2022 Toyota Fortuner Legender", price: "PKR 1,65,00,000", mileage: "25,000 km", city: "Islamabad", fuel: "Diesel", trans: "Automatic", img: publicAsset("listings/toyota-fortuner.jpg"), badge: "Verified", badgeColor: "bg-[#16A34A]", dealer: "Elite Cars" },
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] scroll-reveal opacity-0 translate-y-8 transition-all duration-700">Featured Listings</h2>
          <div className="flex items-center gap-4 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <FilterSelect wrapperClassName="w-auto min-w-[200px]" className="font-medium">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Year: Newest</option>
            </FilterSelect>
            <a href="/search" className="text-primary font-bold hover:underline font-body">View all &rarr;</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <div 
              key={car.id} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white border border-[#EDEFF2] rounded-[0px] group cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
                <img 
                  src={car.img} 
                  alt={car.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className={`absolute top-3 left-3 text-white text-xs font-bold px-2.5 py-1 rounded-[4px] ${car.badgeColor}`}>
                  {car.badge}
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#050B20] hover:text-primary transition-colors z-10">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="font-[800] font-heading text-[1.35rem] text-[#0F172A] mb-1 leading-none">{car.price}</div>
                <div className="font-body text-[#333333] font-semibold mb-5 truncate">{car.title}</div>
                <div className="grid grid-cols-2 gap-y-3 mb-5 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                    <Gauge className="w-4 h-4" /> {car.mileage}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                    <MapPin className="w-4 h-4" /> {car.city}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                    <Droplet className="w-4 h-4" /> {car.fuel}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                    <Settings2 className="w-4 h-4" /> {car.trans}
                  </div>
                </div>
                <div className="h-px bg-[#EDEFF2] w-full mb-4" />
                <div className="text-xs text-[#6B7280] font-medium">{car.dealer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <Button variant="outline" className="rounded-[8px] border-primary text-primary hover:bg-primary/5 font-bold px-8 h-12">
            Load more cars
          </Button>
        </div>
      </div>
    </section>
  );
}
