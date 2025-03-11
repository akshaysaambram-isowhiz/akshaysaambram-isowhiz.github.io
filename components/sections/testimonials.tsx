"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    content:
      "Working with Akshay was a fantastic experience. His attention to detail and technical expertise helped us deliver a complex project on time and within budget.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Solutions Inc.",
    avatar: "/placeholder.svg",
  },
  {
    content:
      "Akshay's ability to understand our requirements and translate them into elegant solutions was impressive. He's a talented developer who consistently delivers quality work.",
    author: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    avatar: "/placeholder.svg",
  },
  {
    content:
      "I was amazed by Akshay's professionalism and technical skills. He not only delivered what we asked for but also suggested improvements that made our product better.",
    author: "Emily Rodriguez",
    role: "Project Lead",
    company: "Digital Innovations",
    avatar: "/placeholder.svg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Client Testimonials
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="mx-auto w-full max-w-4xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-transparent">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="mb-6 text-center text-xl italic text-muted-foreground">
                        "{testimonial.content}"
                      </div>
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                        />
                        <AvatarFallback>
                          {testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-4 text-center">
                        <div className="font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
