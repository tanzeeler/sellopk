import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, LogIn, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { publicAsset } from '@/lib/public-asset';

const NAV_LINKS = ['Buy', 'Sell', 'Dealers', 'Compare', 'Pricing', 'Help'];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#EDEFF2] bg-white ${
          scrolled ? 'h-[60px] shadow-sm' : 'h-[72px]'
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/">
            <img
              src={publicAsset("blackLogo.svg")}
              alt="Sello"
              className="h-9 w-auto cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <Link key={link} href={`/${link.toLowerCase()}`}>
                <span className="text-[#0F172A] hover:text-primary transition-colors font-body text-sm font-medium cursor-pointer">
                  {link}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="text-[#0F172A] border-[#EDEFF2] hover:bg-[#F8F9FA] rounded-[3px] gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button className="rounded-[3px] bg-primary text-[#050B20] hover:bg-primary/90 font-semibold gap-2">
              <Car className="w-4 h-4" />
              Sell your car
            </Button>
          </div>

          <button
            className="md:hidden text-[#0F172A] p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu — rendered OUTSIDE header to avoid stacking context issues */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#050B20] flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 h-[72px] border-b border-white/10 flex-shrink-0">
            <img
              src={publicAsset("blackLogo.svg")}
              alt="Sello"
              className="h-9 w-auto"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col flex-1 justify-center items-center gap-8 px-6">
            {NAV_LINKS.map(link => (
              <Link key={link} href={`/${link.toLowerCase()}`}>
                <span
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-primary text-3xl font-heading font-[800] cursor-pointer tracking-tight"
                >
                  {link}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom buttons */}
          <div className="flex flex-col gap-3 px-6 pb-10 flex-shrink-0">
            <Button
              variant="outline"
              className="w-full h-14 text-white border-white/40 hover:bg-white/10 rounded-[3px] text-base font-bold gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogIn className="w-5 h-5" />
              Login
            </Button>
            <Button
              className="w-full h-14 rounded-[3px] bg-primary text-[#050B20] hover:bg-primary/90 font-bold text-base gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Car className="w-5 h-5" />
              Sell your car
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
