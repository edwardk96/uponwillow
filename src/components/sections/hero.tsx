"use client";

import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import willowImage from "@/assets/willow_screenshot.png";
import uponImage from "@/assets/upon_screenshot.png";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "~70%",
    label: "of inherited AUM leaves the original adviser within 12 months",
  },
  {
    value: "~60 tasks",
    label: "a family typically faces in the UK after losing a loved one",
  },
  {
    value: "9–14 months",
    label:
      "typical time to close an estate - and a window to earn the next generation's trust",
  },
] as const;

const screenshots = [
  {
    src: uponImage,
    alt: "Upon Family Vault — encrypted vault for clients and beneficiaries",
  },
  {
    src: willowImage,
    alt: "Willow Adviser Hub — notify organisations after a client's death",
  },
] as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    slideRefs.current.forEach((slide) => slide && observer.observe(slide));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className="px-6 py-12 border-b-[0.5px] border-divider">
        <Eyebrow>For financial advisers, planners and wealth managers</Eyebrow>

        <h1 className="font-serif text-3xl font-medium mb-5 max-w-3xl">
          Support your clients through multiple generations.
        </h1>

        <p className="text-sm text-secondary leading-[1.8] mb-6 max-w-3xl">
          Up to 70% of inherited assets leave the original adviser within a year
          of a client&apos;s death. Upon and Willow solve this: a secure vault
          your client builds with you while they&apos;re alive, and a
          bereavement admin platform that supports their family - and keeps you
          in the room - during a sensitive time.
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
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Free trial request for Upon and Willow",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center"
          >
            Request free trial
          </ButtonLink>
        </div>
      </section>

      <section className="px-6 py-12 border-b-[0.5px] border-divider">
        {/* Stats — 1 row, 3 columns on desktop; stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-3.5">
          {stats.map((stat) => (
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

        {/* Screenshots */}
        {/* Desktop: two equal-size overlapping screenshots */}
        <div className="hidden md:block mt-10 relative aspect-[16/7]">
          <Image
            src={uponImage}
            alt="Upon Family Vault — encrypted vault for clients and beneficiaries"
            className="absolute top-0 left-0 w-[58%] h-auto rounded-md ring-1 ring-black/5"
          />
          <Image
            src={willowImage}
            alt="Willow Adviser Hub — notify organisations after a client's death"
            className="absolute bottom-0 right-0 w-[58%] h-auto rounded-md ring-1 ring-black/10"
            priority
          />
        </div>

        {/* Mobile: scroll-snap carousel with progress tracker */}
        <div className="md:hidden mt-10">
          <div
            className="-mx-6 overflow-x-auto snap-x snap-mandatory scroll-smooth flex px-6 gap-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Product screenshots, swipe to view more"
          >
            {screenshots.map((shot, i) => (
              <div
                key={shot.alt}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="snap-center shrink-0 w-full"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-auto rounded-md ring-1 ring-black/5"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Tracker */}
          <div className="flex justify-center gap-1.5 mt-4" aria-hidden>
            {screenshots.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-primary/60"
                    : "w-1.5 bg-primary/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
