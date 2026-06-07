import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <section className="bg-primary py-10 sm:py-14 md:py-[80px]">
      <div className="container mx-auto px-5 sm:px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-secondary mb-3 md:mb-4 leading-tight">
            Stay ahead of the market
          </h2>
          <p className="text-secondary/80 font-body text-sm sm:text-base md:text-lg mb-6 md:mb-8 font-medium max-w-md mx-auto leading-relaxed">
            Get weekly price alerts, market trends, and new listing notifications straight to your inbox.
          </p>

          <form
            className="flex w-full max-w-xl mx-auto flex-col md:flex-row gap-3 items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full min-w-0 flex-1 h-12 md:h-14 px-4 sm:px-5 rounded-[3px] border-none bg-white text-[#0F172A] font-body text-base placeholder:text-[#6B7280] focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-shadow"
            />
            <Button
              type="submit"
              className="w-full md:w-auto h-12 md:h-14 px-8 rounded-[3px] bg-secondary text-white font-bold text-base md:text-lg hover:bg-secondary/90 transition-colors shrink-0"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 md:mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-secondary/90">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              No spam, guaranteed
            </span>
            <span className="text-xs font-body text-secondary/70">Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
