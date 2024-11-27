import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/client-portal");
  }

  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
}
