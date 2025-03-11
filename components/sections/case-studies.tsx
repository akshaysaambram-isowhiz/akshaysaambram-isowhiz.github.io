"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    description:
      "A complete overhaul of an e-commerce platform, improving user experience and increasing conversion rates by 150%.",
    image: "/placeholder.svg",
    tags: ["UX Design", "Next.js", "Performance", "API Integration"],
    metrics: [
      { label: "Conversion Rate", value: "+150%" },
      { label: "Page Load Time", value: "-60%" },
      { label: "User Engagement", value: "+80%" },
    ],
    slug: "ecommerce-redesign",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Building a real-time analytics dashboard processing millions of data points with sub-second latency.",
    image: "/placeholder.svg",
    tags: ["WebSocket", "Data Visualization", "React", "Node.js"],
    metrics: [
      { label: "Data Processing", value: "1M+/sec" },
      { label: "Latency", value: "<100ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    slug: "analytics-dashboard",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">
                      {study.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/case-studies/${study.slug}`}>
                        View Case Study
                        <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
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
