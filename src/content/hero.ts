export const heroContent = {
  eyebrow: "For financial advisers, planners and wealth managers",
  headline: "Keep the relationship when your client dies.",
  subhead:
    "Up to 70% of inherited assets leave the original adviser within a year of a client's death. Upon and Willow solve this: a secure vault your client builds with you while they're alive, and a bereavement admin platform that supports their family - and keeps you in the room - during a sensitive time.",
  primaryCta: { label: "Book a 15-min call", action: "book" as const },
  secondaryCta: { label: "Download one-pager", action: "one_pager" as const },
  stats: [
    {
      value: "~70%",
      label: "of inherited AUM leaves the original adviser within 12 months",
    },
    {
      value: "~60",
      label: "administrative tasks a family faces in the UK after a death",
    },
    {
      value: "9–14m",
      label:
        "typical time to close an estate - and a window to earn the next generation's trust",
    },
  ],
} as const;
