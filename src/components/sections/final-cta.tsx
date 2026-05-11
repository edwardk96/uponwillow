import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="text-center mx-6 my-12 px-6 py-14 bg-card border-divider border-1 border-border rounded-2xl">
      <h2 className="font-serif text-3xl font-medium mb-3">
        Build a relationship that outlives a lifetime.
      </h2>
      <p className="text-3.5 text-secondary mb-6 max-w-3xl mx-auto">
        We&apos;ll walk you through how this looks for your clients and their
        families, from the inheritance conversation today through to standing
        alongside the next generation when it matters most.
      </p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        <ButtonLink
          variant="primary"
          href={process.env.NEXT_PUBLIC_CALCOM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </ButtonLink>
        <ButtonLink
          variant="secondary"
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
        >
          Email us
        </ButtonLink>
      </div>
    </section>
  );
}
