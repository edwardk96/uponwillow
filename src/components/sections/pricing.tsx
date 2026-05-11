import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductTag } from "@/components/ui/product-tag";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="px-6 py-12 border-b-[0.5px] border-divider"
    >
      <Eyebrow>Pricing</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        Retention-driven ROI.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        Both products are billed to your firm. Absorb the cost inside your existing
        charges, include it within a premium tier, or pass it through
        transparently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="vault">Upon Vault</ProductTag>
          <p className="text-3.5 font-medium mt-3.5 mb-1">
            Per client, while alive
          </p>
          <p className="font-serif text-8 font-medium leading-[1.8]">
            £5.99
            <span className="font-sans text-3.5 text-tertiary font-normal ml-1">
              / month
            </span>
          </p>
          <p className="text-xs text-tertiary mb-3.5">
            Billed monthly to your firm
          </p>
          <p className="text-xs text-secondary leading-[1.8]">
            Pass through to clients, absorb into your fees, or include within a
            premium tier. Volume discounts available.
          </p>
        </div>

        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="willow">Willow</ProductTag>
          <p className="text-3.5 font-medium mt-3.5 mb-1">
            Per estate, at the time of death
          </p>
          <p className="font-serif text-8 font-medium leading-[1.8]">
            £599
            <span className="font-sans text-3.5 text-tertiary font-normal ml-1">
              one-off
            </span>
          </p>
          <p className="text-xs text-tertiary mb-3.5">
            Billed to your firm when activated
          </p>
          <p className="text-xs text-secondary leading-[1.8]">
            Covered by the firm, not the family. Supporting the next generation
            at this time builds enduring trust.
          </p>
        </div>
      </div>
    </section>
  );
}
