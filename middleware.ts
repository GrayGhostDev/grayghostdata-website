import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/services(.*)",
    "/about(.*)",
    "/contact(.*)",
    "/blog(.*)",
    "/sign-in(.*)",
    "/sign-up(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
