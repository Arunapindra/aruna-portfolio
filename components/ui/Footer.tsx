"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  mail: <Mail size={18} />,
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon !== "mail" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
