"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-[rgba(255,255,255,0.84)] dark:bg-[rgba(11,16,32,0.84)] backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-[clamp(0.5rem,1vw,1.5rem)] px-[clamp(1.25rem,4vw,5rem)] h-[clamp(70px,8vw,100px)]">
        <Logo priority />

        <nav className="hidden items-center gap-2 md:flex">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "text-brand-primary dark:text-brand-accent"
                    : "text-brand-text hover:text-brand-primary dark:text-brand-muted dark:hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-primary dark:bg-brand-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {!active && (
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-brand-primary dark:bg-white transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="primary-button">
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-primary dark:text-brand-text transition hover:border-brand-primary dark:hover:border-brand-accent hover:bg-brand-primary/5 dark:hover:bg-brand-accent/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full border-b border-brand-line bg-brand-surface dark:bg-[#0B1020] md:hidden shadow-xl"
          >
            <nav className="mx-auto flex w-full max-w-[100%] flex-col gap-3 px-4 py-6 sm:px-6 h-screen">
              {siteConfig.navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-4 text-base font-medium transition ${
                      active
                        ? "bg-brand-primary dark:bg-brand-accent text-white"
                        : "bg-brand-background dark:bg-brand-background text-brand-text hover:bg-brand-soft hover:text-brand-primary dark:text-brand-muted dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Theme Toggle in Mobile Menu Only */}
              {mounted && (
                <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-brand-background dark:bg-brand-background px-4 py-4">
                  <p className="text-xs font-semibold text-brand-muted uppercase tracking-[0.2em]">Appearance</p>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setTheme("system")}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition ${
                        theme === "system"
                          ? "bg-brand-primary text-white shadow-md"
                          : "bg-brand-surface text-brand-text hover:text-brand-primary dark:text-brand-muted dark:hover:text-white"
                      }`}
                    >
                      System
                    </button>
                    <button
                      onClick={() => setTheme("light")}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition ${
                        theme === "light"
                          ? "bg-brand-primary text-white shadow-md"
                          : "bg-brand-surface text-brand-text hover:text-brand-primary dark:text-brand-muted dark:hover:text-white"
                      }`}
                    >
                      <Sun size={14} />
                      Light
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition ${
                        theme === "dark"
                          ? "bg-brand-primary text-white shadow-md"
                          : "bg-brand-surface text-brand-text hover:text-brand-primary dark:text-brand-muted dark:hover:text-white"
                      }`}
                    >
                      <Moon size={14} />
                      Dark
                    </button>
                  </div>
                </div>
              )}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
