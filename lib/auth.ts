import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export function requireAuth() {
  const { userId } = auth();
  
  if (!userId) {
    redirect("/sign-in?redirect_url=" + encodeURIComponent(window.location.href));
  }
}

export function redirectIfAuthenticated() {
  const { userId } = auth();
  
  if (userId) {
    redirect("/dashboard");
  }
}
