import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CarOfTheWeek() {
  return (
    <section className="py-[80px] md:py-[110px] bg-[#FFF8E6]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-8 md:mb-12">Car of the Week</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-3/5 aspect-[4/3] bg-white overflow-hidden border border-[#EDEFF2] shadow-lg">
            <img 
              src="/car-of-week.jpg" 
              alt="Toyota Fortuner Sigma 4" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] font-bold text-xs px-3 py-1 rounded-[3px] mb-4 w-fit">
              Sello Verified
            </div>
            <h3 className="sm:text-xl md:text-2xl lg:text-3xl font-heading font-[800] text-[#0F172A] mb-2 text-[20px]">2024 Toyota Fortuner Sigma 4</h3>
            <div className="sm:text-3xl md:text-4xl font-heading font-[800] text-primary mb-6 text-[30px]">PKR 1,25,00,000</div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['2.8L Diesel', '5,000 km', 'Automatic', 'Attitude Black'].map((tag) => (
                <span key={tag} className="bg-white border border-[#EDEFF2] text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-[3px]">
                  {tag}
                </span>
              ))}
            </div>
            
            <ul className="flex flex-col gap-3 mb-8">
              {['First Owner', 'Dealership Maintained', 'Bumper to Bumper Original', 'Under Warranty'].map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-body text-[#333333] font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#050B20]" />
                  </div>
                  {highlight}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 h-12 rounded-[3px] bg-primary text-[#050B20] font-bold text-base hover:bg-primary/90">
                View details
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-[3px] border-[#0F172A] text-[#0F172A] font-bold text-base hover:bg-[#0F172A] hover:text-white">
                Contact dealer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
