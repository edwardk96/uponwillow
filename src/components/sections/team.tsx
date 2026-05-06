import { teamContent } from "@/content/team";
import { Eyebrow } from "@/components/ui/eyebrow";

const accentClasses = {
  vault: "bg-vault-bg text-vault-text",
  willow: "bg-willow-bg text-willow-text",
} as const;

export function Team() {
  return (
    <section id="team" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{teamContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-[22px] font-medium tracking-[-0.005em] mb-2">
        {teamContent.headline}
      </h2>
      <p className="text-[14px] text-secondary leading-[1.6] mb-[30px] max-w-[540px]">
        {teamContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
        {teamContent.members.map((member) => (
          <div
            key={member.name}
            className="p-[22px] bg-card border-[0.5px] border-divider rounded-lg"
          >
            <div className="flex items-center gap-[14px] mb-[14px]">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-medium ${accentClasses[member.accent]}`}
              >
                {member.initials}
              </div>
              <div>
                <p className="text-[15px] font-medium">{member.name}</p>
                <p className="text-[12px] text-tertiary">{member.role}</p>
              </div>
            </div>
            <p className="text-[13px] text-secondary leading-[1.65] mb-3">{member.bio}</p>
            <ul className="text-[12px] text-tertiary leading-[1.6] list-disc pl-4 space-y-[3px]">
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
