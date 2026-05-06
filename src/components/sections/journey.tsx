import { journeyContent } from "@/content/journey";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductTag } from "@/components/ui/product-tag";

export function Journey() {
  return (
    <section
      id="journey"
      className="px-6 py-12 border-b-[0.5px] border-divider"
    >
      <Eyebrow>{journeyContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        {journeyContent.headline}
      </h2>
      <p className="text-3.5 text-secondary leading-[1.6] mb-8 max-w-3xl">
        {journeyContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {journeyContent.cards.map((card) => (
          <div
            key={card.title}
            className="p-6 bg-card border-[0.5px] border-divider rounded-lg"
          >
            <ProductTag product={card.product}>{card.tag}</ProductTag>
            <h3 className="text-base font-medium mt-3.5 mb-1.5">
              {card.title}
            </h3>
            <p className="text-xs text-tertiary mb-3.5">{card.timing}</p>
            <p className="text-sm text-secondary leading-[1.65] mb-3.5">
              {card.description}
            </p>
            <ul className="text-sm leading-[1.7] list-disc pl-5 space-y-1">
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
