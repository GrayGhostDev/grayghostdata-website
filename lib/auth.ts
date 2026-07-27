import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/dashboard");
  }
}

export async function redirectIfAuthenticated() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }
}
