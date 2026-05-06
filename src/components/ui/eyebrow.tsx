type Props = {
  children: React.ReactNode;
};

export function Eyebrow({ children }: Props) {
  return (
    <p className="text-[11px] tracking-[0.08em] uppercase text-tertiary mb-[14px]">
      {children}
    </p>
  );
}
