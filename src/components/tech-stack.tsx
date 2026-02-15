"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

const categories = [
  { key: "language", label: "Languages" },
  { key: "framework", label: "Frameworks" },
  { key: "tool", label: "DevOps & Tools" },
  { key: "observability", label: "Observability / SRE" },
  { key: "networking", label: "Networking" },
] as const;

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Technical{" "}
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Technologies I work with daily to build scalable solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => {
            const items = techStack.filter((t) => t.category === cat.key);
            if (items.length === 0) return null;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6 text-center">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {items.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.1 + idx * 0.05,
                      }}
                      whileHover={{ y: -6, scale: 1.05 }}
                      className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 cursor-default w-24"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        {tech.iconType === "devicon" ? (
                          <i
                            className={`${tech.icon} text-[32px] text-foreground/70 group-hover:text-foreground transition-colors`}
                          />
                        ) : (
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} logo`}
                            width={32}
                            height={32}
                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
