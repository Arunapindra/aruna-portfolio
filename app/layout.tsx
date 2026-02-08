import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aruna Pindra | Senior DevOps Engineer",
  description:
    "Portfolio of Aruna Pindra — Senior DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD pipeline automation. 6+ years of experience building scalable cloud infrastructure.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "SRE",
    "Infrastructure as Code",
    "Docker",
    "Platform Engineering",
  ],
  authors: [{ name: "Aruna Pindra" }],
  openGraph: {
    title: "Aruna Pindra | Senior DevOps Engineer",
    description:
      "Senior DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD pipeline automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased noise-bg">{children}</body>
    </html>
  );
}
