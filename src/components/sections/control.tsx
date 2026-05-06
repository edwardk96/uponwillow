import { controlContent } from "@/content/control";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Control() {
  return (
    <section id="control" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>{controlContent.eyebrow}</Eyebrow>
      <h2 className="font-serif text-[22px] font-medium tracking-[-0.005em] mb-2">
        {controlContent.headline}
      </h2>
      <p className="text-[14px] text-secondary leading-[1.6] mb-[30px] max-w-[540px]">
        {controlContent.subhead}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {controlContent.items.map((item) => (
          <div
            key={item.title}
            className="p-4 bg-card border-[0.5px] border-divider rounded-md"
          >
            <h3 className="text-[13px] font-medium mb-[6px]">{item.title}</h3>
            <p className="text-[12px] text-tertiary leading-[1.5]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
