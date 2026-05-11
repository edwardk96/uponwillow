import { Eyebrow } from "@/components/ui/eyebrow";
import { ProductTag } from "@/components/ui/product-tag";

export function Journey() {
  return (
    <section
      id="journey"
      className="px-6 py-12 border-b-[0.5px] border-divider"
    >
      <Eyebrow>The client journey</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        One plan, for a lifetime and beyond.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        Turn the conversation about inheritance into something tangible. Help
        your client capture everything their family will need, then walk that
        same family through what comes next. The relationship doesn&apos;t end
        with the client. It continues with their children.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="vault">During life · Upon Vault</ProductTag>
          <h3 className="text-base font-medium mt-3.5 mb-1.5">
            Planning while life is good
          </h3>
          <p className="text-xs text-tertiary mb-3.5">
            Introduced at onboarding or annual review
          </p>
          <p className="text-sm text-secondary leading-[1.8] mb-3.5">
            A private place for your client to gather the full picture of
            their estate, alongside the will rather than in place of it.
            Pensions, property, crypto, online accounts, passwords,
            instructions and the small things they&apos;d hate their family
            to miss. A deliberate act of care, framed by you.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              A secure, digital vault that helps clients leave intent. Their family
              inherits a plan, not a puzzle.
            </li>
            <li>
              End-to-end encrypted on your client&apos;s device. Not even Upon
              can see what&apos;s inside.
            </li>
            <li>
              Your client chooses what to keep just for the family and what
              to share with you.
            </li>
          </ul>
        </div>

        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="willow">After death · Willow</ProductTag>
          <h3 className="text-base font-medium mt-3.5 mb-1.5">
            By the family&apos;s side, on the hardest day
          </h3>
          <p className="text-xs text-tertiary mb-3.5">
            Activated by you when the family needs support
          </p>
          <p className="text-sm text-secondary leading-[1.8] mb-3.5">
            When loss happens, the family already has somewhere to turn: you,
            with Willow alongside. The estate your client mapped out flows
            straight in, and the practical work of closing accounts, notifying
            providers and settling affairs is handled with care, on their
            behalf.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              Meet the next generation in a moment that matters, as the trusted
              firm their parent chose.
            </li>
            <li>
              You stay the relationship. Willow is the quiet engine handling
              the calls, forms and follow-ups.
            </li>
            <li>
              A natural bridge into ongoing advice for the people now inheriting
              the wealth you stewarded.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
