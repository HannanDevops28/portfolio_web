"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import { FloatingParticles } from "./FloatingParticlesProps";

export default function ProjectsSection() {
  const softwareProjects = [
    {
      title: "AI-Powered Call Center Live Dashboard",
      desc: "Real-time contact center dashboard combining AI-driven call transcription, sentiment analysis, agent performance metrics, and live call monitoring — delivering instant insights for supervisors and QA teams.",
      tags: ["Next.js", "AI", "WebSockets", "Real-Time", "NLP", "Tailwind"],
      github: "https://github.com/dummy/ai-callcenter-dashboard",
      image: "/projects/ai-call.png",
    },

    {
      title: "AI Dental Charting System",
      desc: "Interactive AI-powered dental odontogram with clinical markings, Perio Charting, Endo diagnostic tools, and auto-selection of affected teeth — built with secure, HIPAA-compliant workflows.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "AI",
        "Odontogram",
        "Healthcare",
      ],
      github: "https://github.com/dummy/ai-dental-charting",
      image: "/projects/dental.png",
    },
    {
      title: "MammoScan AI",
      desc: "AI-powered breast cancer diagnostic platform that analyzes medical images to detect abnormalities and provide clinical insights — leveraging deep learning for accurate tissue classification and risk assessment.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI",
        "Medical",
        "Radix UI",
      ],
      github: "https://github.com/yourusername/mammoscan-ai",
      image: "/projects/BC-AI.png",
    },
    {
      title: "AI Skincare Analyzer",
      desc: "AI-driven skincare web app that analyzes facial images to detect conditions and recommend personalized treatments — powered by advanced AI APIs for real-time insights.",
      tags: ["Next.js", "Python", "AI", "Docker"],
      github: "https://github.com/dummy/ai-skincare",
      image: "/projects/ai-skincare.jpg",
    },
    {
      title: "SellCode SaaS Platform",
      desc: "A secure marketplace for developers to buy and sell source code with Stripe payments, Dockerized deployments, and role-based access — built for scalability and trust.",
      tags: ["Next.js", "Stripe", "Docker", "MongoDB"],
      github: "https://github.com/dummy/sellcode-saas",
      image: "/projects/SellCode.jpg",
    },
    {
      title: "Real-Time E-Commerce System",
      desc: "Socket.io-powered e-commerce app enabling instant inventory updates and notifications — ensuring seamless collaboration and real-time shopping experiences.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/dummy/realtime-ecommerce",
      image: "/projects/Socketio.jpg",
    },
    {
      title: "next-grid-with-filters (NPM Package)",
      desc: "Customizable React Data Grid with built-in filters, pagination, and tab views — boosting developer productivity and simplifying table creation for enterprise apps.",
      tags: ["React", "NPM", "TypeScript", "UI Library"],
      github: "https://github.com/dummy/next-grid-with-filters",
      image: "/projects/npm-package.png",
    },
    {
      title: "MERN Chat Application",
      desc: "A full-stack chat platform built with MERN stack, Firebase authentication, and Pusher for real-time communication — designed for scalability and performance.",
      tags: ["MERN", "Firebase", "Pusher", "Redux"],
      github: "https://github.com/dummy/mern-chat-app",
      image: "/projects/chatbot.png",
    },
    {
      title: "Minimalistic MERN Showcase",
      desc: "A clean MERN web app focused on structured data fetching and mapping — built as an educational project to demonstrate real-world CRUD design principles.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/dummy/minimal-mern-showcase",
      image: "/projects/blog.jpg",
    },
    {
      title: "AWS Amplify Deployment",
      desc: "Production-ready frontend hosting using AWS Amplify with built-in CI/CD, custom domain setup, and serverless scalability — deploy instantly from GitHub.",
      tags: ["Next.js", "AWS Amplify", "CI/CD", "Cloud Hosting"],
      github: "https://github.com/dummy/aws-amplify-deploy",
      image: "/projects/Amplify.jpg",
    },
  ];
  const devopsProjects = [
    {
      title: "End-to-End CI/CD with GitHub Actions, Terraform & Ansible",
      desc: "Fully automated pipeline integrating GitHub Actions, Terraform, and Ansible for provisioning, configuration, and zero-downtime deployments with rollback support.",
      tags: ["GitHub Actions", "Terraform", "Ansible", "AWS"],
      github: "https://github.com/dummy/githubactions-terraform-ansible",
      image: "/projects/github-cicd.jpg",
    },
    {
      title: "Production Deployment Strategies",
      desc: "Explored blue-green, rolling, and canary deployment models to achieve zero-downtime releases, improving reliability and minimizing production risk.",
      tags: ["DevOps", "AWS", "Deployment", "CI/CD"],
      github: "https://github.com/dummy/zero-downtime-deployment",
      image: "/projects/blue-green.jpeg",
    },
    {
      title: "RabbitMQ Microservices on AWS",
      desc: "Event-driven architecture using RabbitMQ with MERN microservices on AWS EC2 — enabling decoupled, fault-tolerant communication and scalable service orchestration.",
      tags: ["RabbitMQ", "Node.js", "Docker", "AWS EC2"],
      github: "https://github.com/dummy/rabbitmq-mern",
      image: "/projects/rabbitmq.jpg",
    },
    {
      title: "Kubernetes Monitoring with Helm, Prometheus & Grafana",
      desc: "Full monitoring stack for Kubernetes clusters using Helm charts, Prometheus metrics, and Grafana dashboards — complete observability and alerting workflow.",
      tags: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
      github: "https://github.com/dummy/k8s-helm-monitoring",
      image: "/projects/grafana.jpg",
    },
    {
      title:
        "Secure Node.js Microservice Deployment with Jenkins, Terraform & Ansible",
      desc: "Containerized Node.js service deployed via ECR, Terraform, and Ansible — integrated with Jenkins CI/CD, IAM roles, NGINX reverse proxy, and Let’s Encrypt SSL automation.",
      tags: ["Jenkins", "Terraform", "Ansible", "AWS ECR"],
      github: "https://github.com/dummy/aws-secure-node",
      image: "/projects/jenkins.jpg",
    },
    {
      title: "Jenkins Multi-Stage CI/CD Pipeline",
      desc: "Comprehensive Jenkins pipeline implementing security scans, SonarQube analysis, Docker builds, and environment-based Ansible deployments across dev/stage/prod.",
      tags: ["Jenkins", "SonarQube", "Ansible", "Docker"],
      github: "https://github.com/dummy/jenkins-multistage-pipeline",
      image: "/projects/jenkins.jpg",
    },
    {
      title: "HashiCorp Vault Secrets Management",
      desc: "Centralized secrets management using HashiCorp Vault — securely handling API keys, credentials, and cloud tokens integrated with Terraform and AWS IAM policies.",
      tags: ["Vault", "Terraform", "AWS", "Security"],
      github: "https://github.com/dummy/vault-secrets-management",
      image: "/projects/vault.jpeg",
    },
    {
      title: "Optimized Docker Image Builds",
      desc: "Reduced Docker image size by over 60% using multi-stage builds, caching, and lightweight base images — improving pipeline performance and deployment speed.",
      tags: ["Docker", "Node.js", "CI/CD"],
      github: "https://github.com/dummy/docker-optimization",
      image: "/projects/dockeimage.png",
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        className="text-4xl font-extrabold text-center text-hgreen-800 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      {/* ===== SOFTWARE ENGINEERING ===== */}
      <ProjectGroup
        title="Software Engineering Projects"
        projects={softwareProjects}
      />

      {/* ===== DEVOPS & CLOUD ===== */}
      <ProjectGroup title="DevOps & Cloud Projects" projects={devopsProjects} />

      {/* Background Glow */}
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-hgreen-300 blur-[160px] opacity-25"
        aria-hidden
      />
    </section>
  );
}

function ProjectGroup({ title, projects }: { title: string; projects: any[] }) {
  return (
    <div className="mb-20">
      <motion.h3
        className="text-2xl font-semibold text-hgreen-700 mb-8 border-b border-hgreen-200 pb-2 inline-block"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <FloatingParticles
        count={10}
        color="bg-amber-400"
        movementDistance={40}
        opacity={0.3}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </div>
  );
}
