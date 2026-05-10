import eddiePhoto from "@/assets/team/eddie.jpg";
import liamPhoto from "@/assets/team/liam.jpg";

export const teamContent = {
  eyebrow: "Meet the founders",
  headline: "Built by people who know the sector.",
  subhead:
    "Institutional finance and UK death-care industry experience, combined with the knowhow of building several production-grade platforms.",
  members: [
    {
      name: "Liam Gray",
      role: "Founder, Upon",
      image: liamPhoto,
      bio:
        "Quant developer at a leading systematic machine-learning hedge fund before founding Upon. Designed Upon's end-to-end encryption architecture. Studied Computer Science at Cambridge.",
      credentials: [
        "Quant Developer, Quadrature Capital",
        "Computer Science, University of Cambridge",
        "Software engineer for over 15 years",
      ],
    },
    {
      name: "Edward Kerr",
      role: "Founder, Willow",
      image: eddiePhoto,
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
