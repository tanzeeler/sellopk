const brands = [
  { name: "Toyota",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toyota_logo_%28red%29.svg/200px-Toyota_logo_%28red%29.svg.png" },
  { name: "Honda",    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/200px-Honda_Logo.svg.png" },
  { name: "Suzuki",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png" },
  { name: "Kia",      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.svg/200px-Kia-logo.svg.png" },
  { name: "Hyundai",  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png" },
  { name: "MG",       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/MG_Cars_logo.svg/200px-MG_Cars_logo.svg.png" },
  { name: "Nissan",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nissan_2020_logo.svg/200px-Nissan_2020_logo.svg.png" },
  { name: "Daihatsu", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Daihatsu_logo.svg/200px-Daihatsu_logo.svg.png" },
  { name: "Changan",  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Changan_automobile_logo.png/200px-Changan_automobile_logo.png" },
  { name: "Haval",    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Haval_Logo_2021.svg/200px-Haval_Logo_2021.svg.png" },
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
              className="group flex flex-col items-center justify-center gap-3 bg-white border border-[#EDEFF2] hover:border-primary/40 hover:shadow-md transition-all duration-200 p-4 md:p-5 rounded-[3px]"
            >
              <div className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
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
