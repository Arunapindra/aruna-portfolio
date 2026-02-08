"use client";

import { siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/motion/FadeIn";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Building reliable infrastructure at scale"
        />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Summary */}
          <FadeIn direction="left">
            <GlassCard>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {siteConfig.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full text-xs bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  AWS Certified
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                  6+ Years Experience
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  Fortune 500
                </span>
              </div>
            </GlassCard>
          </FadeIn>

          {/* Stats grid */}
          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.stats.map((stat, i) => (
                <GlassCard key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      duration={2000 + i * 200}
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
