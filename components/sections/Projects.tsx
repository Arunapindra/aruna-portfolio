"use client";

import { ExternalLink, Github } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Open-source infrastructure and platform engineering projects"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <GlassCard className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-accent-blue transition-colors shrink-0 ml-2"
                  >
                    <Github size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-xs text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-accent-cyan mt-0.5">&#10003;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-accent-blue/10 text-accent-blue/80 border border-accent-blue/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Button
                  href={project.github}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <ExternalLink size={14} />
                  View on GitHub
                </Button>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
