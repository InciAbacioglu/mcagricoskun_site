import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import { isLocale, type Locale } from "@/lib/i18n/locales";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "tr") as Locale;

  return (
    <div className="min-h-screen bg-white text-black">
      <Header locale={locale} />

      <main className="mx-auto max-w-6xl px-5 py-14">{children}</main>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-black/60">
          © {new Date().getFullYear()}{" "}
          {locale === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
        </div>
      </footer>
    </div>
  );
}
