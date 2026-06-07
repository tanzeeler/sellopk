
const brands = [
  "Toyota", "Honda", "Suzuki", "Kia", "Hyundai", 
  "MG", "Nissan", "Daihatsu", "Changan", "Haval"
];

export function PopularBrands() {
  return (
    <section className="py-[80px] bg-background border-t border-[#EDEFF2] overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-[800] font-heading text-[#0F172A]">Popular Brands</h2>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="mx-3 bg-white px-8 py-4 border border-[#EDEFF2] flex items-center justify-center min-w-[160px] rounded-[0px]"
            >
              <span className="font-heading font-[700] text-[#0F172A] text-lg uppercase tracking-wider">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}
