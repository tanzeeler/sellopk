import { Header } from '@/components/sections/Header';
import { HeroSlideshow } from '@/components/sections/HeroSlideshow';
import { QuickStatsBar } from '@/components/sections/QuickStatsBar';
import { BrowseByBodyType } from '@/components/sections/BrowseByBodyType';
import { PopularBrands } from '@/components/sections/PopularBrands';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { HotDeals } from '@/components/sections/HotDeals';
import { CarOfTheWeek } from '@/components/sections/CarOfTheWeek';
import { CompareSection } from '@/components/sections/CompareSection';
import { WhySello } from '@/components/sections/WhySello';
import { BrowseByCity } from '@/components/sections/BrowseByCity';
import { PopularSearches } from '@/components/sections/PopularSearches';
import { PriceAlert } from '@/components/sections/PriceAlert';
import { SellSteps } from '@/components/sections/SellSteps';
import { EmiCalculator } from '@/components/sections/EmiCalculator';
import { InsuranceSection } from '@/components/sections/InsuranceSection';
import { TrustedDealers } from '@/components/sections/TrustedDealers';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { Testimonials } from '@/components/sections/Testimonials';
import { LatestBlog } from '@/components/sections/LatestBlog';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { DownloadApp } from '@/components/sections/DownloadApp';
import { Newsletter } from '@/components/sections/Newsletter';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full font-body overflow-x-hidden">
      <Header />
      <HeroSlideshow />
      <QuickStatsBar />
      <BrowseByBodyType />
      <PopularBrands />
      <FeaturedListings />
      <HotDeals />
      <CarOfTheWeek />
      <CompareSection />
      <WhySello />
      <BrowseByCity />
      <PopularSearches />
      <PriceAlert />
      <SellSteps />
      <EmiCalculator />
      <InsuranceSection />
      <TrustedDealers />
      <StatsStrip />
      <Testimonials />
      <LatestBlog />
      <FaqAccordion />
      <DownloadApp />
      <Newsletter />
      <Footer />
    </div>
  );
}
