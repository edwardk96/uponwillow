type Props = {
  product: "vault" | "willow";
  children: React.ReactNode;
};

const productClasses = {
  vault: "bg-vault-bg text-vault-text",
  willow: "bg-willow-bg text-willow-text",
} as const;

export function ProductTag({ product, children }: Props) {
  return (
    <span
      className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${productClasses[product]}`}
    >
      {children}
    </span>
  );
}
