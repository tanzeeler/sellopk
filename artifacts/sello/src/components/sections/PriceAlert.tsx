import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const examples = [
  { make: "Toyota Corolla", budget: "Under 40 Lac", city: "Lahore", alerts: "142 alerts sent" },
  { make: "Honda Civic", budget: "45–65 Lac", city: "Karachi", alerts: "89 alerts sent" },
  { make: "Suzuki Swift", budget: "Under 25 Lac", city: "Islamabad", alerts: "201 alerts sent" },
];

export function PriceAlert() {
  return (
    <section className="py-[80px] md:py-[110px] bg-white border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-3 font-body">
              <Bell className="w-4 h-4" /> Price Alerts
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-[800] font-heading text-[#0F172A] mb-6 leading-tight">
              Never miss the<br/>right car at the<br/>right price
            </h2>
            <p className="text-lg text-[#6B7280] font-body mb-8 max-w-md mx-auto lg:mx-0">
              Set your make, budget, and city — we'll send you an instant alert the moment a matching car is listed.
            </p>

            {/* Mini form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <select className="flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] bg-white text-[#333333] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none">
                <option value="">Select make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Suzuki</option>
                <option>Kia</option>
              </select>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-12 px-4 rounded-[3px] border border-[#EDEFF2] font-body text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <Button className="rounded-[3px] bg-primary text-[#050B20] font-bold h-12 px-6 shrink-0 gap-2">
                <Bell className="w-4 h-4" /> Alert me
              </Button>
            </div>
            <p className="text-xs text-[#9CA3AF] font-body mt-3 text-center lg:text-left">
              Free. Unsubscribe anytime. No spam.
            </p>
          </div>

          {/* Right: live examples */}
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-4 font-body text-center lg:text-left">
              Popular alerts right now
            </p>
            <div className="space-y-4">
              {examples.map((ex, i) => (
                <div key={i} className="flex items-center gap-4 border border-[#EDEFF2] bg-[#F8F9FA] p-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-[700] font-heading text-[#0F172A] text-sm">{ex.make}</p>
                    <p className="text-xs text-[#6B7280] font-body">{ex.budget} · {ex.city}</p>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-[3px] shrink-0">
                    {ex.alerts}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 bg-[#050B20] text-white text-center">
              <p className="text-3xl font-[800] font-heading text-primary">18,400+</p>
              <p className="text-sm text-white/70 font-body mt-1">price alerts sent this month</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
