import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "es",
});

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Rewrite static files to remove locale prefix
    if (pathname.startsWith("/en/_next/")
        || pathname.startsWith("/es/_next/")
        || pathname.startsWith("/de/_next/")
        || pathname.startsWith("/fr/_next/")
        || pathname.endsWith(".webp")) {
    return NextResponse.rewrite(
      new URL(pathname.replace(/^\/(en|es|de|fr)/, ""), req.url)
    );
  }

  return intlMiddleware(req);
}
