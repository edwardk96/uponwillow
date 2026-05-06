import { pricingContent } from "@/content/pricing";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductTag } from "@/components/ui/product-tag";

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{pricingContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-[22px] font-medium tracking-[-0.005em] mb-2">
        {pricingContent.headline}
      </h2>
      <p className="text-[14px] text-secondary leading-[1.6] mb-[30px] max-w-[540px]">
        {pricingContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        {pricingContent.cards.map((card) => (
          <div
            key={card.tag}
            className="p-[22px] bg-card border-[0.5px] border-divider rounded-lg"
          >
            <ProductTag product={card.product}>{card.tag}</ProductTag>
            <p className="text-[14px] font-medium mt-[14px] mb-1">{card.heading}</p>
            <p className="font-serif text-[30px] font-medium leading-tight">
              {card.price}
              <span className="font-sans text-[14px] text-tertiary font-normal ml-1">
                {card.unit}
              </span>
            </p>
            <p className="text-[12px] text-tertiary mb-[14px]">{card.cadence}</p>
            <p className="text-[12px] text-secondary leading-[1.55]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
