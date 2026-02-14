"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/locales";
import { t } from "@/lib/i18n/dictionary";

function switchLocalePath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  // ["", "tr", "about", ...]
  if (parts.length >= 2) {
    parts[1] = nextLocale;
    const result = parts.join("/");
    return result === "" ? `/${nextLocale}` : result;
  }
  return `/${nextLocale}`;
}

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const copy = t(locale);

  const nav = [
    { href: `/${locale}`, label: copy.nav.home },
    { href: `/${locale}/about`, label: copy.nav.about },
    { href: `/${locale}/services`, label: copy.nav.services },
    { href: `/${locale}/certificates`, label: copy.nav.certificates },
    { href: `/${locale}/academic`, label: copy.nav.academic },
    { href: `/${locale}/blog`, label: copy.nav.blog },
    { href: `/${locale}/testimonials`, label: copy.nav.testimonials },
    { href: `/${locale}/contact`, label: copy.nav.contact },
  ];

  const other: Locale = locale === "tr" ? "en" : "tr";

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex flex-col leading-tight">
          <Link
            href={`/${locale}`}
            className="text-base font-semibold tracking-tight"
          >
            {copy.brand}
          </Link>
          <span className="text-xs text-black/60">{copy.specialty}</span>
        </div>

        <nav className="hidden gap-5 text-sm text-black/70 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={switchLocalePath(pathname, other)}
          className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-black/70 hover:bg-black/5"
        >
          {other.toUpperCase()}
        </Link>
      </div>
    </header>
  );
}
