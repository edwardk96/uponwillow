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
        "Your client builds an end-to-end encrypted vault holding the practical detail their family will need: passwords, account lists, instructions, key documents. You can guide setup or leave it to them.",
      bullets: [
        "Released only after death, on conditions you and your client set",
        "Beneficiary key sharing — no single party (including Upon) can open it alone",
        "Sits alongside the will, not inside it",
      ],
    },
    {
      product: "willow" as const,
      tag: "After death · Willow",
      title: "A clear path through the admin for the family",
      timing: "Activated by you when notified of the death",
      description:
        "Vault contents port directly into Willow, giving the family a personalised checklist of every notification, closure and form. Willow can handle the calls and letters, or guide them through it themselves.",
      bullets: [
        "Your firm appears throughout as the trusted adviser",
        "Warm introduction to surviving spouse and beneficiaries built into the flow",
        "Saves your team the hours some firms already spend on this informally",
      ],
    },
  ],
} as const;
