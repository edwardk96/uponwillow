import { faqContent } from "@/content/faq";
import { Eyebrow } from "@/components/ui/eyebrow";

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{faqContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-[22px] font-medium tracking-[-0.005em] mb-[30px]">
        {faqContent.headline}
      </h2>

      <div>
        {faqContent.items.map((item, idx) => (
          <div
            key={item.question}
            className={`py-4 ${
              idx < faqContent.items.length - 1 ? "border-b-[0.5px] border-divider" : ""
            }`}
          >
            <p className="text-[14px] font-medium mb-[6px]">{item.question}</p>
            <p className="text-[13px] text-secondary leading-[1.6]">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
