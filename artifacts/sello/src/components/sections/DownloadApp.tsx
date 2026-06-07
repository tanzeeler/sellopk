import { SiAppstore, SiGoogleplay } from 'react-icons/si';
import { publicAsset } from '@/lib/public-asset';

export function DownloadApp() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-[60px] md:py-[110px]">
          
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

          <div className="flex-1 relative flex justify-center items-center max-w-[220px] sm:max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <img
              src={publicAsset('app-mockup.png')}
              alt="Sello mobile app"
              className="relative z-10 w-full max-w-[220px] sm:max-w-[280px] md:max-w-[420px] h-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[380px] md:h-[380px] bg-primary/20 rounded-full blur-[80px] z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
