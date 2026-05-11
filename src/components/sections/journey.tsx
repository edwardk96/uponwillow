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
        Two products, for before and after death.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        You introduce both products. Your client uses one. Their family uses the
        other. You stay at the centre of both.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="p-6 bg-card border-[0.5px] border-divider rounded-lg">
          <ProductTag product="vault">During life · Upon Vault</ProductTag>
          <h3 className="text-base font-medium mt-3.5 mb-1.5">
            A secure record of everything that matters
          </h3>
          <p className="text-xs text-tertiary mb-3.5">
            Set up at onboarding or annual review
          </p>
          <p className="text-sm text-secondary leading-[1.8] mb-3.5">
            An end-to-end encrypted vault your client uses to hold everything
            their family will need: passwords, account lists, crypto holdings,
            instructions, key documents. You can guide setup or leave it to
            them.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              A digital safe that complements the will and saves families hours
              hunting lost accounts
            </li>
            <li>
              End-to-end encrypted on your client&apos;s device, not even Upon can
              read what&apos;s inside
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
            Data can be ported directly into Willow, giving the family a
            personalised checklist of every account closure required. Willow
            can handle the calls and forms, and provide guidance on next steps.
          </p>
          <ul className="text-sm leading-[1.8] list-disc pl-5 space-y-1">
            <li>
              Ensure relevance from day one, building trust with beneficiaries
              during a sensitive time
            </li>
            <li>
              You appear throughout as the key contact and trusted adviser
            </li>
            <li>
              For firms already doing this informally, Willow can save you
              hours of form filling
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}