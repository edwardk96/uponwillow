import Image from "next/image";
import { teamContent } from "@/content/team";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Team() {
  return (
    <section id="team" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{teamContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-2">
        {teamContent.headline}
      </h2>
      <p className="text-3.5 text-secondary leading-[1.8] mb-8 max-w-3xl">
        {teamContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {teamContent.members.map((member) => (
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
