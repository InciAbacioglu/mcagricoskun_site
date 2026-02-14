import type { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { t } from "@/lib/i18n/dictionary";

/* =========================
   SEO METADATA (TR / EN)
========================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const activeLocale = locale === "en" ? "en" : "tr";
  const copy = t(activeLocale);

  const title = `${copy.brand} | ${copy.specialty}`;

  const description =
    activeLocale === "en"
      ? "General Surgery — patient-centered care, clear communication, modern clinical experience."
      : "Genel Cerrahi — hasta odaklı yaklaşım, şeffaf bilgilendirme, modern klinik deneyimi.";

  return {
    title,
    description,
  };
}

/* =========================
   LAYOUT
========================= */

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
