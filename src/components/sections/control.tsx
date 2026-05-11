import { Eyebrow } from "@/components/ui/eyebrow";

export function Control() {
  return (
    <section
      id="control"
      className="px-6 py-12 border-b-[0.5px] border-divider"
    >
      <Eyebrow>You stay in control</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        Your client. Your brand. Your support.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        We don&apos;t market to your clients, and we don&apos;t approach the family
        without you. Every touchpoint runs through you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 bg-card border-[0.5px] border-divider rounded-md">
          <h3 className="text-sm font-medium mb-1.5">You initiate everything</h3>
          <p className="text-xs text-tertiary leading-[1.8]">
            Willow only activates when you confirm the death, any invites are
            sent under your firm&apos;s name.
          </p>
        </div>

        <div className="p-4 bg-card border-[0.5px] border-divider rounded-md">
          <h3 className="text-sm font-medium mb-1.5">White-label option</h3>
          <p className="text-xs text-tertiary leading-[1.8]">
            Co-branded or fully white-labelled. Your logo, your contact
            details, your support for the family.
          </p>
        </div>

        <div className="p-4 bg-card border-[0.5px] border-divider rounded-md">
          <h3 className="text-sm font-medium mb-1.5">No cross-sell</h3>
          <p className="text-xs text-tertiary leading-[1.8]">
            We will never market other financial services or third parties to
            your clients or their beneficiaries.
          </p>
        </div>
      </div>
    </section>
  );
}