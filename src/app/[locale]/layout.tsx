import type { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-white text-black">
      {children}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-black/60">
          © {new Date().getFullYear()}{" "}
          {locale === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
}
