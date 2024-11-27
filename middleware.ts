import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Only protect client portal routes
  publicRoutes: ["/((?!client-portal).*)"],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
