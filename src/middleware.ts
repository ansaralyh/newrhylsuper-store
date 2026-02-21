import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Allow everyone to access /admin/login
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  // If it's an /admin route, check for admin session
  if (pathname.startsWith("/admin")) {
    const session = req.auth;
    const userRole = (session?.user as any)?.role;

    if (!session || userRole !== "admin") {
      const url = new URL("/admin/login", req.url);
      url.searchParams.set("callbackUrl", pathname);
      if (session) url.searchParams.set("error", "AccessDenied");
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
