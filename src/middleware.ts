import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/tr", request.url));
  }

  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));

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
