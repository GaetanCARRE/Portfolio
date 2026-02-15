"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
