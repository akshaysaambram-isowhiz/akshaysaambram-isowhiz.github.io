"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { SocialIcons } from "./social-icons";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function MobileNav({ isOpen, onClose }: Readonly<MobileNavProps>) {
  const activeSection = useActiveSection();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-xs border-l bg-background p-6 shadow-lg"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="size-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium text-muted-foreground transition-colors hover:text-foreground",
                      activeSection === link.href.slice(1) && "text-foreground",
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                      onClose();
                    }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <SocialIcons className="justify-center" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
