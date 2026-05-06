import { journeyContent } from "@/content/journey";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductTag } from "@/components/ui/product-tag";

export function Journey() {
  return (
    <section id="journey" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{journeyContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-[22px] font-medium tracking-[-0.005em] mb-2">
        {journeyContent.headline}
      </h2>
      <p className="text-[14px] text-secondary leading-[1.6] mb-[30px] max-w-[540px]">
        {journeyContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        {journeyContent.cards.map((card) => (
          <div
            key={card.title}
            className="p-[22px] bg-card border-[0.5px] border-divider rounded-lg"
          >
            <ProductTag product={card.product}>{card.tag}</ProductTag>
            <h3 className="text-[16px] font-medium mt-[14px] mb-[6px]">
              {card.title}
            </h3>
            <p className="text-[12px] text-tertiary mb-[14px]">{card.timing}</p>
            <p className="text-[13px] text-secondary leading-[1.65] mb-[14px]">
              {card.description}
            </p>
            <ul className="text-[13px] leading-[1.7] list-disc pl-[18px] space-y-[4px]">
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
