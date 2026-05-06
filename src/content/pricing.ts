export const pricingContent = {
  eyebrow: "Pricing",
  headline: "Simple, recoverable",
  subhead:
    "Both products billed to your firm. Opportunity to absorb the fees inside your existing charges, or pass it through transparently.",
  cards: [
    {
      product: "vault" as const,
      tag: "Upon Vault",
      heading: "Per client, while alive",
      price: "£5.99",
      unit: "/ month",
      cadence: "Billed monthly to your firm",
      description:
        "Pass through to clients, absorb into your fees, or include within a premium tier. Volume discounts available.",
    },
    {
      product: "willow" as const,
      tag: "Willow",
      heading: "Per estate, at the time of death",
      price: "£599",
      unit: "one-off",
      cadence: "Billed to your firm when activated",
      description:
        "A retention tool, not a client charge. Retaining inherited AuM pays for the cost multiple times over.",
    },
  ],
} as const;
