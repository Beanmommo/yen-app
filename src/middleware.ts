import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(req: NextRequest) {
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/admin"],
};
