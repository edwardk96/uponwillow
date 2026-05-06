export const teamContent = {
  eyebrow: "Meet the founders",
  headline: "Built by people who know the sector and the systems.",
  subhead:
    "Two complementary backgrounds: deep experience in the UK death-care industry and institutional finance, paired with the technical depth to build a security-grade product.",
  members: [
    {
      initials: "LG",
      name: "Liam Grey",
      role: "Co-founder",
      accent: "vault" as const,
      bio:
        "Quantitative researcher at a leading systematic hedge fund before founding Upon. Computer science at Cambridge. Designed Upon's end-to-end encryption architecture and beneficiary key-sharing scheme.",
      credentials: [
        "Quantitative research, systematic hedge fund",
        "Computer science, University of Cambridge",
        "Author, Upon security whitepaper",
      ],
    },
    {
      initials: "EK",
      name: "Edward Kerr",
      role: "Co-founder",
      accent: "willow" as const,
      bio:
        "Spent four years on the board of Funeral Partners, the UK's second-largest funeral group, while at the private equity fund Montagu. Earlier career in investment banking. Studied Economics at UCL",
      credentials: [
        "Funeral Partners",
        "Private equity, Montagu",
        "Investment banking, M&A",
      ],
    },
  ],
} as const;
