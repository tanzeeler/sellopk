import { Button } from '@/components/ui/button';

export function Newsletter() {
  return (
    <section className="bg-primary py-[60px] md:py-[80px]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-secondary mb-4">Stay ahead of the market</h2>
          <p className="text-secondary/80 font-body text-base md:text-lg mb-8 font-medium">
            Get weekly price alerts, market trends, and new listing notifications straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 h-12 md:h-14 px-5 rounded-[3px] border-none bg-white text-[#0F172A] font-body placeholder:text-[#6B7280] focus:ring-4 focus:ring-secondary/20 focus:outline-none transition-shadow"
            />
            <Button type="submit" className="h-12 md:h-14 px-8 rounded-[3px] bg-secondary text-white font-bold text-base md:text-lg hover:bg-secondary/90 transition-colors">
              Subscribe
            </Button>
          </form>
          <p className="text-xs font-body mt-4 text-[#ffffff99]">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  );
}
