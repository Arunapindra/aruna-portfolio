"use client";

import { Award, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Certifications & Education"
          subtitle="Professional credentials and academic background"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          {siteConfig.certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.1}>
              <GlassCard className="relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                  style={{ backgroundColor: cert.badgeColor }}
                />
                <div className="flex items-start gap-4 pl-4">
                  <div
                    className="p-3 rounded-xl shrink-0"
                    style={{
                      backgroundColor: `${cert.badgeColor}15`,
                      color: cert.badgeColor,
                    }}
                  >
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                      <span>Issued: {cert.date}</span>
                      {cert.validUntil && (
                        <span>Valid until: {cert.validUntil}</span>
                      )}
                      {cert.credentialId && (
                        <span>ID: {cert.credentialId}</span>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}

          {/* Education */}
          <FadeIn delay={0.2}>
            <GlassCard className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl bg-accent-cyan" />
              <div className="flex items-start gap-4 pl-4">
                <div className="p-3 rounded-xl shrink-0 bg-accent-cyan/10 text-accent-cyan">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {siteConfig.education.degree}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Graduated {siteConfig.education.year}
                  </p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
