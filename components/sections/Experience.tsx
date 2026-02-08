"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in DevOps and cloud engineering"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

          {siteConfig.experience.map((exp, i) => (
            <FadeIn
              key={exp.company}
              delay={i * 0.15}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative pl-8 md:pl-0 mb-12 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-0"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg-primary ${
                    i % 2 === 0
                      ? "left-0 md:left-auto md:-right-[6.5px]"
                      : "left-0 md:-left-[6.5px]"
                  }`}
                />

                <GlassCard>
                  <div
                    className={`flex items-center gap-2 mb-1 text-accent-blue text-sm ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div
                    className={`flex items-center gap-2 text-gray-400 text-sm mb-4 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                    <span className="text-gray-600">|</span>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>

                  <ul
                    className={`space-y-2 text-sm text-gray-300 ${
                      i % 2 === 0 ? "md:text-left" : ""
                    }`}
                  >
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-accent-purple mt-1.5 shrink-0">
                          &#8226;
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-1.5 mt-4 ${
                      i % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
