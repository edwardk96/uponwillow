type Props = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: Props) {
  return (
    <p className="text-xs tracking-[0.08em] uppercase text-tertiary mb-3.5">
      {children}
    </p>
  );
}
