"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

interface SocialIconsProps {
  className?: string;
}

const socialLinks = [
  {
    href: "https://github.com/akshaysaambram",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/akshaysaambram",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:your.email@example.com",
    icon: Mail,
    label: "Email",
  },
];

export function SocialIcons({ className }: Readonly<SocialIconsProps>) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 hover:bg-transparent"
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              <span className="sr-only">{link.label}</span>
            </a>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
