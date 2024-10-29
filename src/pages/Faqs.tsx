import FaqList from "@/components/faqs/FaqList";
import SectionTop from "@/components/shared/SectionTop";
import useFaqs from "@/hooks/useFaqs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  "how to buy",
  "payment methods",
  "delivery",
  "exchanges & returns",
  "registration",
  "contacts",
];

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState("how to buy");
  const faqs = useFaqs();

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <main>
      <SectionTop title="FAQs" />
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-[auto_1fr]">
            <div className="flex min-w-[260px] flex-col items-start gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={cn(
                    "group relative block pb-0.5 text-xl font-semibold capitalize text-[#a0a0a0] duration-300 hover:text-black",
                    category === activeCategory && "text-black",
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1px] w-0 bg-black duration-300 group-hover:w-full",
                      category === activeCategory && "w-full",
                    )}
                  ></span>
                </button>
              ))}
            </div>
            <FaqList faqs={filteredFaqs} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
