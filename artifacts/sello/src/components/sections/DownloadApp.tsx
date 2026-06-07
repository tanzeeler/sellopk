import { SiAppstore, SiGoogleplay } from 'react-icons/si';

export function DownloadApp() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 py-[80px] md:py-[110px]">
          
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="md:text-5xl font-[800] font-heading text-white mb-6 text-[22px]">
              Take Sello with you,<br/>everywhere
            </h2>
            <p className="text-lg text-white/80 font-body mb-10 max-w-md mx-auto md:mx-0">
              Browse listings, get instant alerts, and chat with buyers securely from your phone. Download the app today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="flex items-center justify-center gap-3 bg-[#0F172A] border border-white/20 text-white rounded-[3px] px-6 py-3.5 hover:bg-white hover:text-[#0F172A] transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                <SiAppstore className="w-8 h-8" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-body uppercase font-bold leading-none mb-1">Download on the</span>
                  <span className="text-lg font-heading font-[700] leading-none">App Store</span>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-3 bg-[#0F172A] border border-white/20 text-white rounded-[3px] px-6 py-3.5 hover:bg-white hover:text-[#0F172A] transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                <SiGoogleplay className="w-7 h-7" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-body uppercase font-bold leading-none mb-1">Get it on</span>
                  <span className="text-lg font-heading font-[700] leading-none">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 relative hidden md:flex justify-center items-center">
            {/* Phone Mockup — fully visible, no clipping */}
            <div className="relative w-[260px] h-[520px] bg-white rounded-[36px] border-[7px] border-[#1e1e1e] shadow-2xl overflow-hidden z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1e1e1e] rounded-b-[14px] z-20" />
              
              {/* App UI */}
              <div className="w-full h-full bg-background flex flex-col">
                <div className="bg-primary pt-7 pb-3 px-4 flex items-center justify-between">
                  <span className="text-secondary font-heading font-[800] text-lg">Sello</span>
                  <div className="w-6 h-6 rounded-full bg-secondary/20" />
                </div>
                <div className="p-3 flex-1 overflow-hidden">
                  <div className="w-full h-28 bg-muted/30 rounded-[3px] mb-3" />
                  <div className="w-2/3 h-3 bg-muted/40 rounded-[3px] mb-2" />
                  <div className="w-1/2 h-3 bg-muted/30 rounded-[3px] mb-4" />
                  <div className="flex gap-2 mb-3">
                    <div className="flex-1 h-20 bg-muted/20 rounded-[3px]" />
                    <div className="flex-1 h-20 bg-muted/20 rounded-[3px]" />
                  </div>
                  <div className="w-full h-3 bg-muted/30 rounded-[3px] mb-2" />
                  <div className="w-3/4 h-3 bg-muted/20 rounded-[3px] mb-4" />
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-muted/20 rounded-[3px]" />
                    <div className="flex-1 h-16 bg-primary/30 rounded-[3px]" />
                  </div>
                </div>
                {/* Bottom nav bar */}
                <div className="flex justify-around items-center py-3 border-t border-muted/20 bg-white">
                  {['🏠','🔍','❤️','👤'].map((icon, i) => (
                    <div key={i} className={`text-lg ${i === 0 ? 'opacity-100' : 'opacity-30'}`}>{icon}</div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-primary/20 rounded-full blur-[80px] z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
