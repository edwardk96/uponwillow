import { siteMeta } from "@/content/meta";
import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="text-center px-6 py-14 bg-band border-border rounded-2xl">
      <h2 className="font-serif text-[28px] font-medium tracking-[-0.005em] mb-3">
        Worth a 20-minute conversation?
      </h2>
      <p className="text-[14px] text-secondary mb-[22px] max-w-[480px] mx-auto">
        We&apos;ll walk through the adviser journey, share the data behind the model, and answer anything we haven&apos;t covered.
      </p>
      <div className="flex gap-[10px] justify-center flex-wrap">
        <ButtonLink
          variant="primary"
          href={siteMeta.calcomUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          href={`mailto:${siteMeta.contactEmail}`}
        >
          Email us a question
        </ButtonLink>
      </div>
    </section>
  );
}
