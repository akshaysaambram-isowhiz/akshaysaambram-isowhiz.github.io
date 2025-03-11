"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "TailwindCSS"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    title: "AI Chat Application",
    description:
      "An intelligent chat application powered by OpenAI's GPT-4, featuring real-time messaging, code highlighting, and conversation history.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Socket.io", "OpenAI", "MongoDB"],
    demoUrl: "https://demo-chat.com",
    githubUrl: "https://github.com/username/chat",
  },
  {
    title: "Task Management System",
    description:
      "A collaborative task management system with real-time updates, file sharing, and team communication features.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "Express", "PostgreSQL", "WebSocket", "Docker"],
    demoUrl: "https://demo-tasks.com",
    githubUrl: "https://github.com/username/tasks",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Three.js, featuring 3D animations, dark mode, and responsive design.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Three.js", "Framer Motion", "TailwindCSS"],
    demoUrl: "https://demo-portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Featured Projects
            </h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
