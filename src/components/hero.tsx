"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Gamepad2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

const infoItems = [
  {
    icon: MapPin,
    label: "LIVES IN",
    value: personalInfo.location,
    side: "left" as const,
  },
  {
    icon: Briefcase,
    label: "EXPERIENCE",
    value: personalInfo.experience,
    side: "right" as const,
  },
  {
    icon: Gamepad2,
    label: "HOBBIES",
    value: personalInfo.hobbies,
    side: "left" as const,
  },
  {
    icon: GraduationCap,
    label: "EDUCATION",
    value: personalInfo.education,
    side: "right" as const,
  },
];

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial gradient overlay — forest green */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.55_0.14_150_/_6%)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hey, I&apos;m{" "}
            <span className="gradient-text">
              {personalInfo.name} {personalInfo.surname}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {personalInfo.title}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <Button size="lg" className="gap-2 px-6" asChild>
              <a href="/cv.pdf" download>
                <Download size={18} />
                Download my CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Grid layout: info left — avatar center — info right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {infoItems
              .filter((item) => item.side === "left")
              .map((item) => (
                <InfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  align="left"
                />
              ))}
          </motion.div>

          {/* Center — Avatar (clean, no circle/glow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <Image
                src="/profile.png"
                alt="Gaëtan Carré"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            {infoItems
              .filter((item) => item.side === "right")
              .map((item) => (
                <InfoCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  align="right"
                />
              ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  align,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group flex flex-col gap-1 ${
        align === "right" ? "text-right md:text-right" : "text-left"
      }`}
    >
      <div
        className={`flex items-center gap-2 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <Icon
          size={12}
          className="text-primary opacity-60 group-hover:opacity-100 transition-opacity"
        />
        <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <p className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
        {value}
      </p>
    </div>
  );
}
