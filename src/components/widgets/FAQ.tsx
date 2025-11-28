import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We focus exclusively on home service businesses: HVAC, Plumbing, Electrical, Landscaping, Roofing, and Pest Control.",
    value: "item-1",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer: "No. We work on a month-to-month basis. We believe results should keep you with us, not a piece of paper.",
    value: "item-2",
  },
  {
    question: "How much ad spend do you recommend?",
    answer: "It depends on your market and goals, but we typically recommend a starting budget of at least $1,500/month for Google Ads/LSA to see significant traction.",
    value: "item-3",
  },
  {
    question: "Do you build websites or just do marketing?",
    answer: "Both. We build high-converting landing pages and full websites designed specifically to turn visitors into leads.",
    value: "item-4",
  },
  {
    question: "What is the difference between SEO and Google LSAs?",
    answer: "Google LSAs (Local Services Ads) appear at the very top and you pay per lead. SEO helps you rank organically below the ads. We recommend a hybrid approach for maximum visibility.",
    value: "item-5",
  },
  {
    question: "Can you help with my Google Business Profile reviews?",
    answer: "Yes! We have an automated system to request reviews from your past customers and help you manage responses to build trust.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.value} value={faq.value}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
