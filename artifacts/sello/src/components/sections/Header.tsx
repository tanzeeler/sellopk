import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[rgba(237,239,242,0.15)] ${
        scrolled ? 'h-[60px] bg-[#050B20]/92 backdrop-blur-[16px]' : 'h-[72px] bg-[#050B20]/72 backdrop-blur-[16px]'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-[800] font-heading text-white cursor-pointer">
            <span className="text-primary">S</span>ello
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {['Buy', 'Sell', 'Dealers', 'Compare', 'Pricing', 'Help'].map(link => (
            <Link key={link} href={`/${link.toLowerCase()}`}>
              <span className="text-white hover:text-primary transition-colors font-body text-sm font-medium cursor-pointer">
                {link}
              </span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-[8px]">
            Login
          </Button>
          <Button className="rounded-[8px] bg-primary text-[#050B20] hover:bg-primary/90 font-semibold">
            Sell your car
          </Button>
        </div>
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050B20]/95 backdrop-blur-xl z-50 flex flex-col p-4">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 mt-8 items-center">
            {['Buy', 'Sell', 'Dealers', 'Compare', 'Pricing', 'Help'].map(link => (
              <Link key={link} href={`/${link.toLowerCase()}`}>
                <span 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-primary text-2xl font-heading font-bold cursor-pointer"
                >
                  {link}
                </span>
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white/10 rounded-[8px] py-6 text-lg">
                Login
              </Button>
              <Button className="w-full rounded-[8px] bg-primary text-[#050B20] hover:bg-primary/90 font-bold py-6 text-lg">
                Sell your car
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
