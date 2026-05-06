export const pricingContent = {
  eyebrow: "Pricing",
  headline: "Simple, predictable, recoverable.",
  subhead:
    "Both products billed to your firm. Most advisers absorb the vault fee inside their existing service charge, or pass it through transparently.",
  cards: [
    {
      product: "vault" as const,
      tag: "Upon Vault",
      heading: "Per client, while alive",
      price: "£5.99",
      unit: "/ month",
      cadence: "Billed monthly to your firm",
      description:
        "Pass through to clients, absorb into your fee, or include in a premium tier. Volume discounts available above 100 clients.",
    },
    {
      product: "willow" as const,
      tag: "Willow",
      heading: "Per estate, at time of death",
      price: "£599",
      unit: "one-off",
      cadence: "Billed to your firm when activated",
      description:
        "A retention tool, not a client charge. Most firms recover the cost many times over by retaining the inherited mandate.",
    },
  ],
} as const;
