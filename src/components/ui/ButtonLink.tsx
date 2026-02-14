import Link from "next/link";
import type { ReactNode } from "react";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : "border border-black/10 text-black/80 hover:bg-black/5";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
