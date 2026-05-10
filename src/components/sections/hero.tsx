import Image from "next/image";
import heroImage from "@/assets/hero.png";
import { heroContent } from "@/content/hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <section className="px-6 py-12 border-b-[0.5px] border-divider">
        <Eyebrow>{heroContent.eyebrow}</Eyebrow>

        <h1 className="font-serif text-3xl font-medium mb-5 max-w-3xl">
          {heroContent.headline}
        </h1>

        <p className="text-sm text-secondary leading-[1.8] mb-6 max-w-3xl">
          {heroContent.subhead}
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5 sm:items-center">
          <ButtonLink
            variant="primary"
            href={process.env.NEXT_PUBLIC_CALCOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center"
          >
            Book a 15-min call
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            href={`mailto:${process.env.CONTACT_EMAIL}`} //TODO
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center"
          >
            Request free trial
          </ButtonLink>
        </div>
      </section>

      <section className="px-6 py-12 border-b-[0.5px] border-divider">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div className="flex flex-col gap-3.5">
            {heroContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 bg-card border-[0.5px] border-divider rounded-md"
              >
                <p className="font-serif text-2xl md:text-3xl font-medium mb-1.5">
                  {stat.value}
                </p>
                <p className="text-xs text-tertiary leading-[1.8]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Image
            src={heroImage}
            alt=""
            className="md:col-span-2 w-full h-auto md:h-full rounded-md md:object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}
