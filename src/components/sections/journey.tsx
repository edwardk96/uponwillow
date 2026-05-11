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
        Ease the admin burden, before and after death.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        Clients securely save their accounts, passwords and other details today.
        When they die, their beneficiaries gain access, and can automatically
        notify and start closing accounts.{" "}
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
            A private place for your clients to gather the full picture of their
            estate. Pensions, property, crypto, online accounts, passwords,
            instructions and the small things they&apos;d hate their family to
            miss. A deliberate act of care, framed by you.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              A digital safe that complements the will and saves families hours
              hunting lost accounts
            </li>
            <li>
              End-to-end encrypted on your client&apos;s device, not even Upon
              can read what&apos;s inside
            </li>
            <li>
              The vault key is split between beneficiaries, several must come
              together after death to open it
            </li>
          </ul>
        </div>

        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="willow">After death · Willow</ProductTag>
          <h3 className="text-base font-medium mt-3.5 mb-1.5">
            A clear path through &apos;death admin&apos;
          </h3>
          <p className="text-xs text-tertiary mb-3.5">
            Activated by you when notified of the death
          </p>
          <p className="text-sm text-secondary leading-[1.8] mb-3.5">
            When a client dies, the family turn to you. The estate can be mapped
            in Willow, so you can give the family a personalised checklist of
            what to do next. In the background, Willow handles the calls and
            forms to start closing accounts.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              Meet beneficiaries in a moment that matters, as the trusted firm
              their loved one chose
            </li>
            <li>
              You lead the relationship. Willow is the quiet engine handling
              calls, forms and follow-ups
            </li>
            <li>
              For firms already doing this informally, Willow can save you hours
              of paperwork
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
