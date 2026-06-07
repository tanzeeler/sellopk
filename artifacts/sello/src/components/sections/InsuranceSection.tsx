import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partners = [
  { name: "Jubilee", abbr: "JU", color: "bg-blue-600" },
  { name: "EFU Life", abbr: "EFU", color: "bg-red-600" },
  { name: "Adamjee", abbr: "AJ", color: "bg-green-700" },
  { name: "TPL Direct", abbr: "TPL", color: "bg-purple-600" },
  { name: "IGI Insurance", abbr: "IGI", color: "bg-orange-600" },
  { name: "Atlas Honda", abbr: "AH", color: "bg-sky-600" },
];

const benefits = [
  { icon: "⚡", title: "Instant quotes", desc: "Get quotes from top insurers in under 60 seconds" },
  { icon: "📋", title: "Compare plans", desc: "Side-by-side plan comparison with full details" },
  { icon: "🛡️", title: "Comprehensive cover", desc: "Theft, accident, fire & third-party protection" },
  { icon: "📞", title: "24/7 claim support", desc: "Our team is on call to assist with any claim" },
];

export function InsuranceSection() {
  return (
    <section className="py-[80px] md:py-[110px] bg-[#F8F9FA] border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-3 font-body">
            <ShieldCheck className="w-4 h-4" /> Sello Insurance
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-4 leading-tight">
            Insure your car before<br className="hidden md:block" /> you drive it home
          </h2>
          <p className="text-lg text-[#6B7280] font-body max-w-xl mx-auto">
            Compare and buy car insurance from Pakistan's leading providers — all within Sello.
          </p>
        </div>

        {/* Partners logos strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2 border border-[#EDEFF2] bg-white px-5 py-3 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
              <div className={`w-7 h-7 rounded-full ${p.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                {p.abbr.slice(0, 2)}
              </div>
              <span className="font-heading font-[700] text-[#0F172A] text-sm">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white border border-[#EDEFF2] p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-[700] font-heading text-[#0F172A] mb-2">{b.title}</h3>
              <p className="text-sm text-[#6B7280] font-body leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-[3px] bg-primary text-[#050B20] font-bold px-10 h-12 text-base gap-2">
            Get free insurance quote <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
