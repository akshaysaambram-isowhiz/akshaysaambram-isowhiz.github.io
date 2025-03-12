"use client";

import { Button } from "@/components/ui/button";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function Scene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Float
          speed={4}
          rotationIntensity={1}
          floatIntensity={2}
          floatingRange={[0, 0.5]}
        >
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial
              color="#3b82f6"
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </Float>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Akshay Saambram
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 text-xl text-muted-foreground"
            >
              Full Stack Developer crafting exceptional digital experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col justify-center gap-4 md:flex-row"
            >
              <Button size="lg" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
