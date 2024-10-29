import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqListProps {
  faqs: any[];
}

const FaqList: React.FC<FaqListProps> = ({ faqs }) => {
  return (
    <Accordion
      className="ml-auto w-full max-w-4xl space-y-4"
      type="single"
      collapsible
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          className="rounded-xl border px-5"
          key={index}
          value={`item-${index}-${faq.category}`}
        >
          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline lg:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-base text-[#6c6966] lg:text-lg">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
