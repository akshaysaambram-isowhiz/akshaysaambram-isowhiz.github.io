"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import * as React from "react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchItems = [
  { type: "project", name: "E-Commerce Platform", href: "#projects" },
  { type: "case-study", name: "Analytics Dashboard", href: "#case-studies" },
  { type: "blog", name: "Building with Next.js", href: "#blog" },
  { type: "page", name: "About Me", href: "#about" },
  { type: "page", name: "Contact", href: "#contact" },
];

export function SearchDialog({ open, onOpenChange }: Readonly<SearchDialogProps>) {
  const [query, setQuery] = React.useState("");

  const filteredItems = searchItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 p-0 outline-none">
        <DialogHeader className="px-4 pb-4 pt-5">
          <DialogTitle asChild>
            <Command.Input
              autoFocus
              placeholder="Search..."
              value={query}
              onValueChange={setQuery}
              className="border-none bg-transparent text-lg outline-none placeholder:text-muted-foreground/60 focus:border-none focus:outline-none focus:ring-0"
            />
          </DialogTitle>
        </DialogHeader>
        <Command.List className="max-h-[300px] overflow-y-auto px-2 pb-2">
          <AnimatePresence>
            {filteredItems.length === 0 && query && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center text-sm text-muted-foreground"
              >
                No results found.
              </motion.div>
            )}
            {filteredItems.map((item) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
              >
                <Command.Item
                  value={item.name}
                  onSelect={() => {
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                    onOpenChange(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Search className="h-4 w-4" />
                  <span>{item.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.type}
                  </span>
                </Command.Item>
              </motion.div>
            ))}
          </AnimatePresence>
        </Command.List>
      </DialogContent>
    </Dialog>
  );
}
