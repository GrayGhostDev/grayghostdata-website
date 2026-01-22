import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default authMiddleware({
  // Only protect client portal routes
  publicRoutes: ["/((?!client-portal).*)"],
  afterAuth(auth, req) {
    const response = NextResponse.next();
    
    // Block indexing on non-production deployments
    const host = req.headers.get('host') || '';
    if (host.includes('.vercel.app') || host.includes('localhost')) {
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    }
    
    return response;
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
