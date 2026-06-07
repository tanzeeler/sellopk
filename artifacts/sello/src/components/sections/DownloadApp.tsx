import { SiAppstore, SiGoogleplay } from 'react-icons/si';

export function DownloadApp() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 pt-[80px] md:pt-[110px] pb-[80px] md:pb-0">
          
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="md:text-5xl font-[800] font-heading text-white mb-6 text-[32px]">
              Take Sello with you,<br/>everywhere
            </h2>
            <p className="text-lg text-white/80 font-body mb-10 max-w-md mx-auto md:mx-0">
              Browse listings, get instant alerts, and chat with buyers securely from your phone. Download the app today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="flex items-center justify-center gap-3 bg-[#0F172A] border border-white/20 text-white rounded-[8px] px-6 py-3.5 hover:bg-white hover:text-[#0F172A] transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                <SiAppstore className="w-8 h-8" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-body uppercase font-bold leading-none mb-1">Download on the</span>
                  <span className="text-lg font-heading font-[700] leading-none">App Store</span>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-3 bg-[#0F172A] border border-white/20 text-white rounded-[8px] px-6 py-3.5 hover:bg-white hover:text-[#0F172A] transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                <SiGoogleplay className="w-7 h-7" />
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-body uppercase font-bold leading-none mb-1">Get it on</span>
                  <span className="text-lg font-heading font-[700] leading-none">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 relative hidden md:block self-end mt-12 md:mt-0">
            {/* Simple CSS Phone Mockup */}
            <div className="relative mx-auto w-[300px] h-[550px] bg-white rounded-t-[40px] border-[8px] border-[#333] border-b-0 overflow-hidden shadow-2xl z-10 translate-y-12">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#333] w-32 mx-auto rounded-b-[16px] z-20" />
              
              {/* App UI placeholder */}
              <div className="w-full h-full bg-background flex flex-col">
                <div className="bg-primary h-20 w-full pt-10 px-4 flex items-center justify-between">
                  <span className="text-secondary font-heading font-[800] text-xl">Sello</span>
                </div>
                <div className="p-4 flex-1">
                  <div className="w-full h-32 bg-muted/20 rounded-none mb-4" />
                  <div className="w-2/3 h-4 bg-muted/30 rounded-none mb-2" />
                  <div className="w-1/2 h-4 bg-muted/30 rounded-none mb-6" />
                  
                  <div className="flex gap-2 mb-4">
                    <div className="w-full h-24 bg-muted/20 rounded-none" />
                    <div className="w-full h-24 bg-muted/20 rounded-none" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] z-0" />
          </div>

        </div>
      </div>
    </section>
  );
}
