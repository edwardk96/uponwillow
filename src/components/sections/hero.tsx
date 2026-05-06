import { heroContent } from "@/content/hero";
import { siteMeta } from "@/content/meta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { OnePagerForm } from "@/components/one-pager-form";

export function Hero() {
  return (
    <section className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{heroContent.eyebrow}</Eyebrow>

      <h1 className="font-serif text-3xl font-medium leading-[1.8] mb-5 max-w-3xl">
        {heroContent.headline}
      </h1>

      <p className="text-sm text-secondary leading-[1.8] mb-6 max-w-3xl">
        {heroContent.subhead}
      </p>

      <div className="flex flex-wrap gap-2.5 items-center">
        <ButtonLink
          variant="primary"
          href={siteMeta.calcomUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {heroContent.primaryCta.label}
        </ButtonLink>
        <OnePagerForm triggerLabel={heroContent.secondaryCta.label} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-9">
        {heroContent.stats.map((stat) => (
          <div
            key={stat.label}
            className="p-5 bg-card border-[0.5px] border-divider rounded-md"
          >
            <p className="font-serif text-xl font-medium mb-1.5">
              {stat.value}
            </p>
            <p className="text-xs text-tertiary leading-[1.8]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
