"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Box,
  Code2,
  Activity,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud size={22} />,
  workflow: <GitBranch size={22} />,
  container: <Box size={22} />,
  code: <Code2 size={22} />,
  activity: <Activity size={22} />,
  terminal: <Terminal size={22} />,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with daily"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
