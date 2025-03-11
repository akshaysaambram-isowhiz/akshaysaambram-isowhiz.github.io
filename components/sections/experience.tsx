"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Led development of multiple high-impact projects using Next.js and Node.js",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2020 - 2022",
    description:
      "Developed and maintained various web applications using React and Express",
  },
  {
    title: "Frontend Developer",
    company: "Web Agency",
    period: "2018 - 2020",
    description:
      "Created responsive and interactive user interfaces using modern web technologies",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Experience</h2>
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-8">
              <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-border" />
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${
                    index % 2 === 0 ? "pr-8 md:ml-auto md:pl-8" : "pl-8"
                  } md:w-1/2`}
                >
                  <div
                    className={`absolute top-5 h-3 w-3 rounded-full bg-primary ${
                      index % 2 === 0
                        ? "-left-1.5 md:-right-1.5 md:left-auto"
                        : "-left-1.5"
                    }`}
                  />
                  <Card>
                    <CardHeader>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription>{experience.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                      <p className="text-sm">{experience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
