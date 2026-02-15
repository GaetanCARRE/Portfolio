"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { socialLinks, personalInfo } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get in{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Interested in working together? Let&apos;s connect.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link, idx) => {
            const Icon = iconMap[link.icon] || Mail;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <Icon
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <span className="text-sm text-foreground hidden sm:inline">
                  {link.name}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground/50 group-hover:text-primary transition-colors"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <Separator className="my-16 opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}{" "}
            {personalInfo.surname}. Built with Next.js, shadcn/ui & ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}
