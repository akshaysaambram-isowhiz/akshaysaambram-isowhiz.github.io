"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

const links = [
  { href: "#home", label: "Home" },
  {
    href: "#work",
    label: "Work",
    children: [
      { href: "#projects", label: "Projects" },
      { href: "#case-studies", label: "Case Studies" },
      { href: "#testimonials", label: "Testimonials" },
    ],
  },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function NavLinks() {
  const activeSection = useActiveSection();
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);

  return (
    <ul className="flex items-center gap-6">
      {links.map((link) => (
        <li key={link.href} className="relative">
          <a
            href={link.href}
            className={cn(
              "flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
              activeSection === link.href.slice(1) && "text-foreground",
            )}
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(link.href)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.label}
            {link.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200"
                style={{
                  transform:
                    hoveredLink === link.href
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </a>

          {/* Animated underline */}
          {activeSection === link.href.slice(1) && (
            <motion.div
              layoutId="activeSection"
              className="absolute -bottom-1 left-0 h-0.5 w-full bg-foreground"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}

          {/* Dropdown menu */}
          {link.children && hoveredLink === link.href && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-background p-2 shadow-lg"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  className="block rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(child.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {child.label}
                </a>
              ))}
            </motion.div>
          )}
        </li>
      ))}
    </ul>
  );
}
