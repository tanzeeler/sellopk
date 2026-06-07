import { SiFacebook, SiInstagram, SiX, SiYoutube, SiAppstore, SiGoogleplay } from 'react-icons/si';
import { Shield, CheckCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-[80px] pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/4">
            <img
              src="https://sello.pk/assets/blackLogo-BWAk2Vcy.svg"
              alt="Sello"
              className="h-9 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/70 font-body text-sm mb-6 leading-relaxed">
              Pakistan's most trusted car marketplace. Buy, sell, and finance cars with complete peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-white">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-white">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-white">
                <SiX className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors text-white">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-[700] font-heading text-lg mb-6">Company</h4>
              <ul className="flex flex-col gap-3 font-body text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[700] font-heading text-lg mb-6">Buy</h4>
              <ul className="flex flex-col gap-3 font-body text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Browse cars</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cars by city</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cars by brand</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Financing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[700] font-heading text-lg mb-6">Sell</h4>
              <ul className="flex flex-col gap-3 font-body text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Post an ad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing packages</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dealer signup</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Seller guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[700] font-heading text-lg mb-6">Support</h4>
              <ul className="flex flex-col gap-3 font-body text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/50 text-sm font-body">
            © 2026 Sello. All rights reserved.
          </div>
          
          <div className="flex gap-4 opacity-70">
            <SiAppstore className="w-6 h-6 text-white hover:text-primary transition-colors cursor-pointer" />
            <SiGoogleplay className="w-6 h-6 text-white hover:text-primary transition-colors cursor-pointer" />
          </div>

          <div className="flex items-center gap-4 text-white/50 text-xs font-body">
            <div className="flex items-center gap-1"><Shield className="w-4 h-4 text-[#16A34A]" /> Secure Platform</div>
            <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> Verified Network</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
