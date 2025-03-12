"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function About() {
  return (
    <section id="about" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src="/akshaysaambram.png"
                alt="About Me"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="mb-6 text-3xl font-bold">About Me</h2>
              <div className="mb-8 space-y-4">
                <p className="text-muted-foreground">
                  Hi! I&apos;m Akshay Saambram, a passionate Full Stack
                  Developer with expertise in creating beautiful, functional,
                  and user-friendly applications.
                </p>
                <p className="text-muted-foreground">
                  With a strong foundation in modern web technologies and a keen
                  eye for design, I specialize in building scalable applications
                  that deliver exceptional user experiences.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-sm text-muted-foreground">
                      Years of Experience
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/akshaysaambram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Github
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/akshaysaambram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:akshaysaambram@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
