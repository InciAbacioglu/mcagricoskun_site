import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Özel yönlendirme: bayramhediyesi
  if (
    pathname === "/bayramhediyesi" ||
    pathname === "/tr/bayramhediyesi" ||
    pathname === "/en/bayramhediyesi"
  ) {
    return NextResponse.redirect("https://69b2709133b5f.site123.me");
  }

  // Ana sayfa -> varsayılan TR
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/tr", request.url));
  }

  // URL zaten locale ile başlıyor mu?
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));

  // Locale yoksa /tr ekle
  if (
    !hasLocale &&
    !pathname.startsWith("/_next") &&
    pathname !== "/favicon.ico"
  ) {
    return NextResponse.redirect(new URL(`/tr${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
