const brands = [
  { name: "Toyota",   initial: "T", color: "#EB0A1E" },
  { name: "Honda",    initial: "H", color: "#CC0000" },
  { name: "Suzuki",   initial: "S", color: "#004B87" },
  { name: "Kia",      initial: "K", color: "#05141F" },
  { name: "Hyundai",  initial: "H", color: "#002C5F" },
  { name: "MG",       initial: "M", color: "#A50020" },
  { name: "Nissan",   initial: "N", color: "#C3002F" },
  { name: "Daihatsu", initial: "D", color: "#E60026" },
  { name: "Changan",  initial: "C", color: "#003DA5" },
  { name: "Haval",    initial: "H", color: "#1A1A1A" },
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
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-heading font-[900] text-xl md:text-2xl flex-shrink-0"
                style={{ backgroundColor: brand.color }}
              >
                {brand.initial}
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
