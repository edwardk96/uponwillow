export const teamContent = {
  eyebrow: "Meet the founders",
  headline: "Built by people who know the sector.",
  subhead:
    "Institutional finance and UK death-care industry experience, combined with the knowhow of building several production-grade platforms.",
  members: [
    {
      initials: "LG",
      name: "Liam Gray",
      role: "Co-founder",
      accent: "vault" as const,
      bio:
        "Quant developer at a leading systematic machine-learning hedge fund before founding Upon. Designed Upon's end-to-end encryption architecture. Studied Computer Science at Cambridge.",
      credentials: [
        "Quant Developer, Quadrature Capital",
        "Computer Science, University of Cambridge",
        "Software engineer for over 15 years",
      ],
    },
    {
      initials: "EK",
      name: "Edward Kerr",
      role: "Co-founder",
      accent: "willow" as const,
      bio:
        "Spent four years on the board of Funeral Partners, the UK's third-largest funeral group, while at the private equity fund Montagu. Earlier career in investment banking. Studied Economics at UCL.",
      credentials: [
        "Board, Funeral Partners",
        "Private Equity, Montagu",
        "Investment Banking, Morgan Stanley",
      ],
    },
  ],
} as const;
