import { ShieldCheck, ArrowRight, Zap, ClipboardList, Shield, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/public-asset';

const partners = [
  { name: 'Jubilee', logo: 'insurance-logos/jubilee-alt.png' },
  { name: 'EFU Life', logo: 'insurance-logos/efu.svg' },
  { name: 'Adamjee', logo: 'insurance-logos/adamjee.png' },
  { name: 'TPL Direct', logo: 'insurance-logos/tpl.svg' },
  { name: 'IGI Insurance', logo: 'insurance-logos/igi.jpg' },
  { name: 'Atlas Honda', logo: 'insurance-logos/atlas-honda.png' },
];

const benefits = [
  { icon: Zap,           title: "Instant quotes",       desc: "Get quotes from top insurers in under 60 seconds" },
  { icon: ClipboardList, title: "Compare plans",        desc: "Side-by-side plan comparison with full details" },
  { icon: Shield,        title: "Comprehensive cover",  desc: "Theft, accident, fire & third-party protection" },
  { icon: PhoneCall,     title: "24/7 claim support",   desc: "Our team is on call to assist with any claim" },
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
            <div key={i} className="flex items-center gap-3 border border-[#EDEFF2] bg-white px-5 py-3 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                <img
                  src={publicAsset(p.logo)}
                  alt={`${p.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-heading font-[700] text-[#0F172A] text-sm">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white border border-[#EDEFF2] p-6 hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-[3px] bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
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
