import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Aruna Pindra",
  title: "Senior DevOps Engineer",
  location: "Dallas, TX",
  email: "arunacheendrim7@gmail.com",
  phone: "469-224-0908",
  linkedin: "https://linkedin.com/in/aruna-ch-a6bab933ss/",
  github: "https://github.com/Arunapindra",
  resumeFile: "/Aruna_Pindra_Resume.docx",

  summary:
    "DevOps Engineer with 6+ years of experience designing and implementing CI/CD pipelines, cloud infrastructure, and container orchestration platforms. Proven track record at Fortune 500 companies including Capital One and Deloitte, driving infrastructure automation, reducing deployment times, and improving system reliability. Passionate about building scalable, secure, and observable platforms using modern DevOps practices.",

  navItems: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/Arunapindra", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/aruna-ch-a6bab933ss/",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:arunacheendrim7@gmail.com",
      icon: "mail",
    },
  ],

  stats: [
    { label: "Years Experience", value: 6, suffix: "+" },
    { label: "CI/CD Pipelines Built", value: 50, suffix: "+" },
    { label: "Cloud Migrations", value: 12, suffix: "+" },
    { label: "Uptime Achieved", value: 99.9, suffix: "%" },
  ],

  skillCategories: [
    {
      title: "Cloud Platforms",
      icon: "cloud",
      skills: [
        { name: "AWS (EC2, S3, EKS, Lambda, RDS, VPC)", level: 95 },
        { name: "Azure (AKS, ACR, VNET, KeyVault)", level: 85 },
        { name: "GCP", level: 65 },
      ],
    },
    {
      title: "CI/CD & Automation",
      icon: "workflow",
      skills: [
        { name: "Jenkins", level: 95 },
        { name: "GitHub Actions", level: 90 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "ArgoCD", level: 85 },
        { name: "Azure DevOps", level: 80 },
        { name: "Spinnaker", level: 70 },
      ],
    },
    {
      title: "Containers & Orchestration",
      icon: "container",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Helm", level: 90 },
        { name: "ECS / EKS / AKS", level: 85 },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: "code",
      skills: [
        { name: "Terraform", level: 95 },
        { name: "CloudFormation", level: 85 },
        { name: "Ansible", level: 80 },
        { name: "Pulumi", level: 70 },
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: "activity",
      skills: [
        { name: "Prometheus & Grafana", level: 90 },
        { name: "ELK Stack", level: 85 },
        { name: "Datadog", level: 80 },
        { name: "CloudWatch", level: 85 },
        { name: "PagerDuty", level: 80 },
      ],
    },
    {
      title: "Scripting & Tools",
      icon: "terminal",
      skills: [
        { name: "Python", level: 85 },
        { name: "Bash / Shell", level: 90 },
        { name: "Go", level: 70 },
        { name: "Git / GitHub / GitLab", level: 95 },
      ],
    },
  ],

  projects: [
    {
      title: "AWS DevOps Platform",
      description:
        "Production-grade AWS infrastructure platform with EKS, Terraform IaC, Helm charts, and end-to-end CI/CD pipelines using GitHub Actions and ArgoCD.",
      tags: [
        "AWS",
        "Terraform",
        "EKS",
        "Helm",
        "ArgoCD",
        "GitHub Actions",
        "Docker",
      ],
      github: "https://github.com/Arunapindra/aws-devops-platform",
      highlights: [
        "Multi-environment Terraform with remote state and locking",
        "EKS cluster with managed node groups and IRSA",
        "GitOps-driven deployment with ArgoCD",
        "Automated security scanning with tfsec, Trivy, and Checkov",
      ],
    },
    {
      title: "SRE Observability Platform",
      description:
        "Full-stack observability solution with Prometheus, Grafana, Alertmanager, and Loki for SLO/SLI-based monitoring of Go microservices on Kubernetes.",
      tags: [
        "Prometheus",
        "Grafana",
        "Kubernetes",
        "Go",
        "SRE",
        "Alertmanager",
        "Loki",
      ],
      github: "https://github.com/Arunapindra/sre-observability-platform",
      highlights: [
        "Custom SLO/SLI dashboards with multi-window burn rate alerts",
        "Go microservices instrumented with Prometheus client",
        "Centralized log aggregation with Loki and Promtail",
        "Automated runbooks and incident response workflows",
      ],
    },
    {
      title: "Azure Cloud Platform",
      description:
        "Enterprise Azure infrastructure with AKS, ACR, Key Vault, and comprehensive monitoring using Terraform modules and Kustomize overlays.",
      tags: [
        "Azure",
        "AKS",
        "Terraform",
        "Kustomize",
        "OPA Gatekeeper",
        "Azure DevOps",
      ],
      github: "https://github.com/Arunapindra/azure-cloud-platform",
      highlights: [
        "AKS with Workload Identity and Azure CNI networking",
        "OPA Gatekeeper policies for cluster governance",
        "Multi-pipeline CI/CD with GitHub Actions and Azure DevOps",
        "Azure Monitor integration with custom Grafana dashboards",
      ],
    },
  ],

  experience: [
    {
      company: "Capital One",
      role: "DevOps Engineer",
      location: "Dallas, TX",
      period: "Aug 2023 — Present",
      technologies: [
        "AWS",
        "Terraform",
        "Jenkins",
        "Kubernetes",
        "Docker",
        "ArgoCD",
        "Prometheus",
        "Grafana",
      ],
      bullets: [
        "Architected and managed CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by 40% and enabling 200+ weekly deployments across 15 microservices",
        "Designed and implemented infrastructure as code using Terraform for AWS services (EC2, EKS, RDS, S3, VPC), managing 50+ cloud resources with automated provisioning",
        "Led migration of 12 monolithic applications to containerized microservices on Amazon EKS, improving scalability and reducing infrastructure costs by 35%",
        "Implemented GitOps workflows using ArgoCD for Kubernetes deployments, achieving 99.9% deployment success rate with automated rollbacks",
        "Built comprehensive monitoring and alerting platform using Prometheus, Grafana, and CloudWatch, reducing MTTR from 45 minutes to 12 minutes",
        "Orchestrated container deployments using Docker and Kubernetes with Helm charts, managing 50+ pods across production, staging, and development environments",
        "Automated security scanning in CI/CD pipelines using SonarQube, Trivy, and AWS Inspector, identifying and remediating 200+ vulnerabilities",
        "Managed AWS networking infrastructure including VPCs, subnets, security groups, and Transit Gateway connections across 5 AWS accounts",
      ],
    },
    {
      company: "Deloitte",
      role: "DevOps Engineer",
      location: "Dallas, TX",
      period: "Mar 2022 — Jul 2023",
      technologies: [
        "Azure",
        "Terraform",
        "GitLab CI",
        "Kubernetes",
        "Ansible",
        "ELK",
        "Vault",
      ],
      bullets: [
        "Designed and maintained multi-cloud CI/CD pipelines using GitLab CI/CD and Azure DevOps, supporting 8 development teams with 50+ daily deployments",
        "Implemented infrastructure automation using Terraform and Ansible for Azure resources (AKS, VNET, Key Vault), reducing provisioning time from days to 30 minutes",
        "Managed Kubernetes clusters on AKS with Helm chart deployments, implementing auto-scaling policies that handled 300% traffic spikes during peak periods",
        "Established centralized logging and monitoring using ELK Stack and Datadog, providing observability across 25+ microservices with custom dashboards and alerts",
        "Implemented HashiCorp Vault for secrets management, migrating 200+ hardcoded secrets to dynamic secret injection across all environments",
        "Automated compliance and security scanning using Checkov and OPA Gatekeeper, achieving 95% compliance score across infrastructure deployments",
        "Created disaster recovery procedures and automated backup solutions for critical databases, achieving RPO of 1 hour and RTO of 4 hours",
      ],
    },
    {
      company: "Zee Entertainment",
      role: "DevOps Engineer",
      location: "India",
      period: "Dec 2019 — Jan 2022",
      technologies: [
        "AWS",
        "Jenkins",
        "Docker",
        "Ansible",
        "CloudFormation",
        "Nagios",
        "Python",
      ],
      bullets: [
        "Built and maintained CI/CD pipelines using Jenkins for 20+ applications, implementing automated testing and deployment workflows with 95% success rate",
        "Managed AWS infrastructure including EC2, S3, RDS, Lambda, and CloudFront, supporting high-traffic streaming platform serving 50M+ monthly users",
        "Automated server provisioning and configuration management using Ansible playbooks, reducing manual configuration effort by 80%",
        "Implemented containerization strategy using Docker, migrating 15 legacy applications to containerized deployments with Docker Compose and ECS",
        "Designed and implemented monitoring solutions using CloudWatch and Nagios, creating 100+ custom alerts for proactive issue detection",
        "Developed Python and Bash automation scripts for log analysis, backup management, and infrastructure maintenance tasks",
        "Managed DNS configurations, SSL certificates, and CDN distributions using Route 53 and CloudFront for global content delivery",
      ],
    },
    {
      company: "Ericsson",
      role: "DevOps Engineer",
      location: "India",
      period: "Sep 2018 — Nov 2019",
      technologies: [
        "Linux",
        "Jenkins",
        "Docker",
        "Git",
        "Bash",
        "Nagios",
        "Maven",
      ],
      bullets: [
        "Supported CI/CD pipeline development using Jenkins for Java and Python applications, assisting senior engineers in build and deployment automation",
        "Managed Linux servers (Ubuntu, CentOS) for development and staging environments, performing system administration and troubleshooting tasks",
        "Implemented Docker-based development environments, creating standardized container images for consistent builds across teams",
        "Assisted in version control management using Git and Bitbucket, establishing branching strategies and code review workflows",
        "Automated routine operations using Bash scripting including log rotation, disk cleanup, and health checks across 30+ servers",
        "Supported monitoring infrastructure using Nagios and basic ELK Stack setup, contributing to improved incident response times",
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect — Associate",
      issuer: "Amazon Web Services",
      date: "Feb 2025",
      validUntil: "Feb 2028",
      credentialId: "SAA-C03",
      badgeColor: "#FF9900",
    },
  ],

  education: {
    degree: "Bachelor of Technology",
    year: "2018",
  },
};
