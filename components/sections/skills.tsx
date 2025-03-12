"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const skills = {
  "Frontend Development": {
    Advanced: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
    Intermediate: ["Redux", "Shadcn UI", "React Query", "Three.js"],
    Familiar: ["React Table", "React Hook Form", "React Router", "Jotai"],
  },
  "Backend Development": {
    Advanced: ["Node.js", "Express", "REST APIs", "Spring Boot", "FastAPI", "PostgreSQL"],
    Intermediate: ["Docker", "Microservices"],
    Familiar: ["AWS", "Firebase"],
  },
  "Tools & Others": {
    Advanced: ["Git", "VS Code", "Figma", "GitHub Actions"],
    Intermediate: ["Webpack", "Vite", "Storybook"],
    Familiar: ["Apache Solr", "Nginx"],
  },
};

const proficiencyColors = {
  Advanced: "bg-green-500",
  Intermediate: "bg-blue-500",
  Familiar: "bg-purple-500",
};

export function Skills() {
  return (
    <section id="skills" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, proficiencies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(proficiencies).map(
                      ([proficiency, skillList]) => (
                        <div key={proficiency}>
                          <div className="mb-2 flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                proficiencyColors[
                                  proficiency as keyof typeof proficiencyColors
                                ]
                              }`}
                            />
                            <span className="text-sm font-medium">
                              {proficiency}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => (
                              <TooltipProvider key={skill}>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Badge
                                      variant="secondary"
                                      className="cursor-help transition-colors hover:bg-muted"
                                    >
                                      {skill}
                                    </Badge>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{proficiency} proficiency</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
