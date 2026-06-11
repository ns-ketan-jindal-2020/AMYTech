"use client";

import Link from "next/link";
import { Building2, MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { siteMeta, siteNavigation } from "@/lib/content";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      className="border-border/80 bg-background/80 backdrop-blur"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      type="button"
    >
      {resolvedTheme === "dark" ? (
        <SunMedium className="h-4 w-4" />
      ) : (
        <MoonStar className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">
        {resolvedTheme === "dark" ? "Light" : "Dark"}
      </span>
    </Button>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#overview" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <div className="font-display text-lg font-semibold tracking-tight text-foreground">
              {siteMeta.shortName}
            </div>
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {siteMeta.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteNavigation.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="accent"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <Link href="#contact">Reach out</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
