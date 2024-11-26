"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslation } from "@/lib/i18n/use-translation";

const routes = [
  {
    href: "/",
    label: "nav.home",
  },
  {
    href: "/services",
    label: "nav.services",
  },
  {
    href: "/about",
    label: "nav.about",
  },
  {
    href: "/contact",
    label: "nav.contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Gray Ghost Data
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {t(route.label)}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu can be added here */}
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="/client-portal">
              <Button variant="ghost" className="text-sm">
                {t("nav.clientPortal")}
              </Button>
            </Link>
            <LanguageSelector />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
