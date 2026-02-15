"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Calendar, Building2, ShieldCheck } from "lucide-react";
import type { CredlyBadge } from "@/lib/types";

export default function Certifications() {
  const [badges, setBadges] = useState<CredlyBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/credly")
      .then((res) => res.json())
      .then((data) => {
        setBadges(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Professional certifications verified via Credly.
          </p>
        </motion.div>

        {loading && (
          <div className="flex justify-center">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <span className="text-sm">Loading certifications...</span>
            </div>
          </div>
        )}

        {error && (
          <p className="text-center text-muted-foreground text-sm">
            Unable to load certifications. Please try again later.
          </p>
        )}

        {!loading && !error && badges.length === 0 && (
          <p className="text-center text-muted-foreground text-sm">
            No certifications found.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, idx) => (
            <CertificationCard key={badge.id} badge={badge} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({
  badge,
  index,
}: {
  badge: CredlyBadge;
  index: number;
}) {
  const issuerName =
    badge.issuer?.entities?.find((e) => e.primary)?.entity?.name ||
    "Unknown Issuer";

  const skills = badge.badge_template?.skills?.slice(0, 5) || [];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
    >
      {/* Badge image */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={badge.badge_template?.image_url || badge.image_url}
            alt={badge.badge_template?.name || "Certification badge"}
            width={64}
            height={64}
            className="object-contain rounded-lg"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {badge.badge_template?.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <Building2 size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{issuerName}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-4 line-clamp-3">
        {badge.badge_template?.description}
      </p>

      {/* Metadata */}
      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          <span>Issued {formatDate(badge.issued_at_date)}</span>
        </div>
        {badge.expires_at_date && (
          <div className="flex items-center gap-1.5">
            <Award size={12} />
            <span>Expires {formatDate(badge.expires_at_date)}</span>
          </div>
        )}
      </div>

      {/* Skills tags */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {skills.map((skill) => (
            <Badge
              key={skill.id}
              variant="secondary"
              className="text-[10px] px-2 py-0.5"
            >
              {skill.name}
            </Badge>
          ))}
          {(badge.badge_template?.skills?.length || 0) > 5 && (
            <Badge variant="outline" className="text-[10px] px-2 py-0.5">
              +{(badge.badge_template?.skills?.length || 0) - 5}
            </Badge>
          )}
        </div>
      )}

      {/* Verification ID & Link */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
          <ShieldCheck size={12} className="text-primary/60" />
          <span>ID: {badge.id.substring(0, 8).toUpperCase()}</span>
        </div>
        {badge.badge_template?.url && (
          <a
            href={badge.badge_template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
          >
            <ExternalLink size={12} />
            Verify
          </a>
        )}
      </div>

      {/* Level badge */}
      {badge.badge_template?.level && (
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">
            {badge.badge_template.level}
          </Badge>
        </div>
      )}
    </motion.div>
  );
}
