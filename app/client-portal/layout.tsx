import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/client-portal");
  }

  return <div className="min-h-screen bg-background">{children}</div>;
}
