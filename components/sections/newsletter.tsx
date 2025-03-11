"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Newsletter() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your newsletter subscription logic here
    toast.success("Thanks for subscribing!");
  };

  return (
    <section className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to my newsletter for the latest updates on projects and
            tech insights.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
