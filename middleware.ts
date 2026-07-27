import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Only protect client portal routes; everything else is public
const isProtectedRoute = createRouteMatcher(["/client-portal(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
