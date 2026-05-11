import { ButtonLink } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="text-center mx-6 my-12 px-6 py-14 bg-card border-divider border-1 border-border rounded-2xl">
      <h2 className="font-serif text-3xl font-medium mb-3">
        Want to learn more?
      </h2>
      <p className="text-3.5 text-secondary mb-6 max-w-3xl mx-auto">
        We can walk you through both products, share details behind
        Upon&apos;s encryption, explain how Willow notifies companies after
        death and answer any other questions.
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
