import { publicAsset } from "@/lib/public-asset";

const brands = [
  { name: "Toyota", logo: "brand-logos/toyota.svg" },
  { name: "Honda", logo: "brand-logos/honda.svg" },
  { name: "Suzuki", logo: "brand-logos/suzuki.svg" },
  { name: "Kia", logo: "brand-logos/kia.svg" },
  { name: "Hyundai", logo: "brand-logos/hyundai.svg" },
  { name: "MG", logo: "brand-logos/mg.svg" },
  { name: "Nissan", logo: "brand-logos/nissan.svg" },
  { name: "Daihatsu", logo: "brand-logos/daihatsu.png" },
  { name: "Changan", logo: "brand-logos/changan.png" },
  { name: "Haval", logo: "brand-logos/haval.png" },
];

export function PopularBrands() {
  return (
    <section className="py-[60px] md:py-[80px] bg-background border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-[800] font-heading text-[#0F172A]">Popular Brands</h2>
          <a href="/brands" className="text-sm font-semibold text-primary hover:underline font-body">View all →</a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {brands.map((brand) => (
            <button
              key={brand.name}
              className="group flex flex-col items-center justify-center gap-3 bg-white border border-[#EDEFF2] hover:border-primary/40 hover:shadow-md transition-all duration-200 p-4 md:p-6 rounded-[3px]"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                <img
                  src={publicAsset(brand.logo)}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs md:text-sm font-heading font-[700] text-[#0F172A] group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
