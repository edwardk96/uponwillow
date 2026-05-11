import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";

import eddiePhoto from "@/assets/team/eddie.jpg";
import liamPhoto from "@/assets/team/liam.jpg";

const members = [
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
      "Spent four years on the board of Funeral Partners, the UK's third-largest funeral group, while at the private equity fund Montagu. Early career in investment banking. Studied Economics at UCL.",
    credentials: [
      "Board, Funeral Partners",
      "Private Equity, Montagu",
      "Investment Banking, Morgan Stanley",
    ],
  },
];

export function Team() {
  return (
    <section id="team" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>Meet the founders</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        Built by people from the sector.
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        Institutional finance and UK death-care experience, combined
        with the knowhow of building several production-grade platforms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {members.map((member) => (
          <div
            key={member.name}
            className="p-6 bg-card border-[0.5px] border-divider rounded-lg"
          >
            <div className="flex items-center gap-3.5 mb-3.5">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-tertiary">{member.role}</p>
              </div>
            </div>
            <p className="text-sm text-secondary leading-[1.8] mb-3">
              {member.bio}
            </p>
            <ul className="text-xs text-tertiary leading-[1.8] list-disc pl-4 space-y-1">
              {member.credentials.map((cred) => (
                <li key={cred}>{cred}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}