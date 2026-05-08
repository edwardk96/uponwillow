export const journeyContent = {
  eyebrow: "The client journey",
  headline: "One relationship, before and after.",
  subhead:
    "You introduce both products. Your client uses one. Their family uses the other. You stay at the centre of both.",
  cards: [
    {
      product: "vault" as const,
      tag: "During life · Upon Vault",
      title: "A secure record of everything that matters",
      timing: "Set up at onboarding or annual review",
      description:
        "An end-to-end encrypted vault your client uses to hold everything their family will need: passwords, account lists, crypto holdings, instructions, key documents. You can guide setup or leave it to them.",
      bullets: [
        "A digital safe that complements the will and saves families hours hunting lost accounts",
        "End-to-end encrypted on your client's device, not even Upon can read what's inside",
        "The vault key is split between beneficiaries, several must come together after death to open it",
      ],
    },
    {
      product: "willow" as const,
      tag: "After death · Willow",
      title: "A clear path through 'death admin'",
      timing: "Activated by you when notified of the death",
      description:
        "Data can be ported directly into Willow, giving the family a personalised checklist of every account closure required. Willow can handle the calls and forms, and guide them through key steps.",
      bullets: [
        "Ensure relevance from day one, building trust with beneficiaries during a sensitive time",
        "You appear throughout as the key contact and trusted adviser",
        "For firms already doing this informally, Willow can save you hours of filling in forms",
      ],
    },
  ],
} as const;
