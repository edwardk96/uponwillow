import { siteMeta } from "@/content/meta";
import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="text-center mx-6 my-12 px-6 py-14 bg-card border-divider border-1 border-border rounded-2xl">
      <h2 className="font-serif text-3xl font-medium mb-3">
        Want to learn more?
      </h2>
      <p className="text-3.5 text-secondary mb-6 max-w-3xl mx-auto">
        We can walk you through the adviser journey, share details behind the vault&apos;s encryption, explain how we notify companies and answer any remaining questions.
      </p>
      <div className="flex gap-2.5 justify-center flex-wrap">
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
          Email us
        </ButtonLink>
      </div>
    </section>
  );
}
