"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

function ScreenshotGallery({
  screenshots,
}: {
  screenshots: { src: string; alt: string }[];
}) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full">
      {/* Main image */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/20 border border-border/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={screenshots[current].src}
              alt={screenshots[current].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-colors cursor-pointer"
          aria-label="Previous screenshot"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-colors cursor-pointer"
          aria-label="Next screenshot"
        >
          <ChevronRight size={16} />
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
          <p className="text-white text-xs font-medium">
            {screenshots[current].alt}
          </p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {screenshots.map((screenshot, idx) => (
          <button
            key={screenshot.src}
            onClick={() => setCurrent(idx)}
            className={`relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
              idx === current
                ? "border-primary ring-1 ring-primary/30"
                : "border-border/30 opacity-60 hover:opacity-100"
            }`}
            aria-label={`View ${screenshot.alt}`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A selection of projects I&apos;ve worked on.
          </p>
        </motion.div>

        {/* Featured projects — full width with gallery */}
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="mb-12 p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
              {/* Left: screenshots gallery */}
              {project.screenshots && project.screenshots.length > 0 && (
                <ScreenshotGallery screenshots={project.screenshots} />
              )}

              {/* Right: project info */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Badge
                      variant={project.kind === "pro" ? "default" : "secondary"}
                      className="text-[10px] px-2 py-0.5 uppercase tracking-wide"
                    >
                      {project.kind === "pro" ? "Pro" : "Personal"}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 text-primary flex-shrink-0"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other projects — 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <Badge
                  variant={project.kind === "pro" ? "default" : "secondary"}
                  className="text-[10px] px-2 py-0.5 uppercase tracking-wide"
                >
                  {project.kind === "pro" ? "Pro" : "Personal"}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
