import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  const faqs = [
    {
      q: "Is it free to list my car on Sello?",
      a: "Yes! Creating a basic listing is completely free for individual sellers. We also offer premium packages if you want to feature your ad for faster visibility."
    },
    {
      q: "How are listings verified?",
      a: "Our team conducts a basic digital verification of the documents uploaded, and we monitor user reports. Dealerships go through a strict offline verification process to get the 'Trusted Dealer' badge."
    },
    {
      q: "How do I contact a seller?",
      a: "You can contact sellers via our secure in-app messaging system or call them directly if they have chosen to display their phone number on the listing."
    },
    {
      q: "Can I sell my car directly to a dealer?",
      a: "Yes! Sello offers an 'Instant Cash' feature where verified dealers in your city can bid on your car for a fast, hassle-free sale."
    },
    {
      q: "What documents do I need to buy a car?",
      a: "You will typically need your CNIC, original registration book/card of the vehicle, biometric transfer deed, and proof of token tax payment. Always verify documents before transferring funds."
    },
    {
      q: "How does Sello ensure safe transactions?",
      a: "We actively monitor platform activity, verify high-volume sellers, and provide comprehensive safety guides. However, Sello is not a party to the actual transaction, so we advise users to meet in safe public locations and use bank transfers."
    }
  ];

  return (
    <section className="py-[80px] md:py-[110px] bg-white border-t border-[#EDEFF2]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-[800] font-heading text-[#0F172A] mb-10 text-center">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[#EDEFF2] py-2">
              <AccordionTrigger className="text-left font-[700] font-heading text-lg text-[#0F172A] hover:text-primary hover:no-underline transition-colors [&>svg]:text-primary [&>svg]:w-5 [&>svg]:h-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#4B5563] font-body text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
