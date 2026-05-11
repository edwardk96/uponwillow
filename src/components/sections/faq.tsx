import { Eyebrow } from "@/components/ui/eyebrow";

const items = [
  {
    question: "Are these two separate products?",
    answer:
      "Upon and Willow are two independent companies that work hand in hand, so you can shape the experience to your firm. With your client's permission, what they recorded in life flows seamlessly to the family at the moment it's needed.",
  },
  {
    question: "Can I use just one?",
    answer:
      "Yes. Each works on its own, but they're designed to feel like one continuous relationship for your client and their family.",
  },
  {
    question: "Are they a regulated purchase?",
    answer:
      "Neither product is a regulated financial service. Upon is a digital vault, Willow is software and death admin support. We can share our security whitepaper and a note on FCA-adjacent considerations on request.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "We can get you set up in minutes. We also offer a free trial, please contact us to arrange.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-12 border-b-[0.5px] border-divider">
      <Eyebrow>Common questions</Eyebrow>
      <h2 className="font-serif text-2xl font-medium tracking-[-0.005em] mb-8">
        What advisers usually ask us.
      </h2>

      <div>
        {items.map((item, idx) => (
          <div
            key={item.question}
            className={`py-4 ${
              idx < items.length - 1 ? "border-b-[0.5px] border-divider" : ""
            }`}
          >
            <p className="text-3.5 font-medium mb-1.5">{item.question}</p>
            <p className="text-sm text-secondary leading-[1.8]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}