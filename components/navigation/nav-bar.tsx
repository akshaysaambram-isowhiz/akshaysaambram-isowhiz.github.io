"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Search } from "lucide-react";
import * as React from "react";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { SearchDialog } from "./search-dialog";
import { SocialIcons } from "./social-icons";

export function NavBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], [88, 64]);
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"],
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.1)"],
  );

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        height: headerHeight,
        backgroundColor: headerBg,
        borderBottom: headerBorder,
      }}
      className={cn(
        "fixed left-0 top-0 z-50 w-full backdrop-blur-md transition-colors dark:border-border/40 dark:bg-background/95",
        isScrolled && "border-b shadow-sm",
      )}
    >
      <nav className="container mx-auto flex h-full items-center justify-between px-4">
        <motion.a
          href="#"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AS
        </motion.a>

        <div className="hidden items-center gap-8 md:flex">
          <NavLinks />

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <SocialIcons />
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </motion.header>
  );
}
