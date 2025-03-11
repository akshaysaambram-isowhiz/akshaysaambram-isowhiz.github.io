"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Building a Modern Portfolio with Next.js and Three.js",
    excerpt:
      "Learn how to create an engaging portfolio website using Next.js 14 and Three.js for 3D animations.",
    date: "2024-01-20",
    image: "/placeholder.svg",
    slug: "building-modern-portfolio",
  },
  {
    title: "The Future of Web Development: 2024 Trends",
    excerpt:
      "Exploring upcoming trends in web development, from AI integration to advanced animations.",
    date: "2024-01-15",
    image: "/placeholder.svg",
    slug: "web-development-trends-2024",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt:
      "Best practices and techniques for building high-performance React applications.",
    date: "2024-01-10",
    image: "/placeholder.svg",
    slug: "react-performance-optimization",
  },
];

export function Blog() {
  return (
    <section id="blog" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Posts</h2>
            <Button variant="ghost" asChild>
              <Link href="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
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
