
export function PopularSearches() {
  const searches = [
    "Under 20 lac", "20–40 lac", "40–70 lac", "Automatic", 
    "Toyota Corolla", "SUVs in Lahore", "Honda City", "Japanese imports"
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-[800] font-heading text-[#0F172A] mb-6">Popular Searches</h2>
        <div className="flex flex-wrap gap-3">
          {searches.map((search, idx) => (
            <button 
              key={idx}
              className="px-5 py-2.5 bg-white border border-[#EDEFF2] rounded-[8px] font-body text-sm font-medium text-[#333333] hover:bg-primary hover:border-primary hover:text-[#050B20] transition-colors duration-200"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
