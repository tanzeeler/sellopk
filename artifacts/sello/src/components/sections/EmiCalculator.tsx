import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function EmiCalculator() {
  const [price, setPrice] = useState<number>(5000000); // 50 lac default
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20); // 20% default
  const [tenureYears, setTenureYears] = useState<number>(3); // 3 years default

  // Calculate EMI
  // Formula: EMI = (P * r * (1 + r)^n) / ((1 + r)^n - 1)
  // P = Principal, r = monthly rate, n = total months
  const principal = price - (price * (downPaymentPct / 100));
  const annualRate = 0.14; // 14%
  const monthlyRate = annualRate / 12;
  const months = tenureYears * 12;

  const emi = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1));

  const formatPKR = (num: number) => {
    return new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section className="py-[80px] md:py-[110px] bg-[#FFF8E6]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[800] font-heading text-[#0F172A] mb-4">Calculate Your EMI</h2>
          <p className="text-[#6B7280] font-body text-lg">Plan your budget with our easy car finance calculator.</p>
        </div>

        <div className="bg-white p-6 md:p-10 border border-[#EDEFF2] shadow-xl flex flex-col md:flex-row gap-10 rounded-[0px]">
          
          {/* Controls */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Price Slider */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-semibold text-[#0F172A] font-body text-sm">Car Price (PKR)</label>
                <span className="font-bold text-primary font-heading">{formatPKR(price)}</span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="30000000" 
                step="100000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#EDEFF2] rounded-lg appearance-none cursor-pointer accent-primary outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                style={{
                  background: `linear-gradient(to right, #FFA602 ${((price - 500000) / (30000000 - 500000)) * 100}%, #EDEFF2 ${((price - 500000) / (30000000 - 500000)) * 100}%)`
                }}
              />
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-semibold text-[#0F172A] font-body text-sm">Down Payment ({downPaymentPct}%)</label>
                <span className="font-bold text-primary font-heading">{formatPKR(price * (downPaymentPct / 100))}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="5"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full h-2 bg-[#EDEFF2] rounded-lg appearance-none cursor-pointer accent-primary outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{
                  background: `linear-gradient(to right, #FFA602 ${((downPaymentPct - 10) / 40) * 100}%, #EDEFF2 ${((downPaymentPct - 10) / 40) * 100}%)`
                }}
              />
            </div>

            {/* Tenure */}
            <div>
              <label className="font-semibold text-[#0F172A] font-body text-sm block mb-3">Loan Tenure (Years)</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setTenureYears(yr)}
                    className={`flex-1 py-2 rounded-[8px] font-bold text-sm transition-colors duration-150 border ${
                      tenureYears === yr 
                        ? 'bg-primary border-primary text-secondary' 
                        : 'bg-white border-[#EDEFF2] text-[#6B7280] hover:border-primary'
                    }`}
                  >
                    {yr} YR
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="flex-1 bg-[#F9FAFB] border border-[#EDEFF2] p-8 flex flex-col justify-center items-center text-center">
            <h4 className="text-[#6B7280] font-body font-semibold mb-2">Estimated Monthly EMI</h4>
            <div className="text-4xl md:text-5xl font-[800] font-heading text-primary mb-2">
              PKR {formatPKR(emi)}
            </div>
            <p className="text-sm text-[#6B7280] mb-8 font-body">@ 14% annual interest rate</p>
            
            <div className="w-full h-px bg-[#EDEFF2] mb-8" />
            
            <div className="flex justify-between w-full text-sm font-body mb-2">
              <span className="text-[#6B7280]">Principal Amount</span>
              <span className="font-bold text-[#0F172A]">PKR {formatPKR(principal)}</span>
            </div>
            <div className="flex justify-between w-full text-sm font-body mb-8">
              <span className="text-[#6B7280]">Total Interest</span>
              <span className="font-bold text-[#0F172A]">PKR {formatPKR((emi * months) - principal)}</span>
            </div>

            <Button className="w-full h-14 rounded-[8px] bg-primary text-secondary font-bold text-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Apply for financing
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
