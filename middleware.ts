import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

import environment from "./configs/environment";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: environment.AUTH_SECRET,
  });
  const { pathname } = req.nextUrl;

  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};
