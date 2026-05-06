import { heroContent } from "@/content/hero";
import { siteMeta } from "@/content/meta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { OnePagerForm } from "@/components/one-pager-form";

export function Hero() {
  return (
    <section className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{heroContent.eyebrow}</Eyebrow>

      <h1 className="font-serif text-[32px] font-medium leading-[1.2] tracking-[-0.01em] mb-[18px] max-w-[540px]">
        {heroContent.headline}
      </h1>

      <p className="text-[15px] text-secondary leading-[1.65] mb-6 max-w-[540px]">
        {heroContent.subhead}
      </p>

      <div className="flex flex-wrap gap-[10px] items-center">
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px] mt-9">
        {heroContent.stats.map((stat) => (
          <div
            key={stat.label}
            className="p-[18px] bg-card border-[0.5px] border-divider rounded-md"
          >
            <p className="font-serif text-[26px] font-medium mb-[6px]">{stat.value}</p>
            <p className="text-[12px] text-tertiary leading-[1.5]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
