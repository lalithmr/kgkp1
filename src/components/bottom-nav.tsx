"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Info, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-40 w-full border-t border-brand-line bg-[rgba(255,255,255,0.84)] pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:bg-[rgba(11,16,32,0.84)] md:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center gap-1 w-full h-full ${
                active ? "text-brand-primary dark:text-brand-accent" : "text-brand-muted hover:text-brand-text dark:hover:text-white"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 bg-brand-primary/10 dark:bg-brand-accent/20 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <Icon size={20} className={active ? "scale-110 transition-transform" : "scale-100 transition-transform"} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
