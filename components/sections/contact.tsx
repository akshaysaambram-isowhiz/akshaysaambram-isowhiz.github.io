"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-muted-foreground">
                Have a project in mind or want to collaborate? Feel free to
                reach out. I&apos;d love to hear from you!
              </p>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="mailto:akshaysaambram@gmail.com"
                        className="text-sm hover:underline"
                      >
                        akshaysaambram@gmail.com
                      </a>
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://github.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://twitter.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter Profile"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
