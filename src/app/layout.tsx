import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { GlobalBackground } from "@/components/GlobalBackground";
import { FloatingParticles } from "@/components/FloatingParticlesProps";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Hannan Ahmed — Software Engineer | React, Next.js, DevOps",
  description:
    "Portfolio of Hannan Ahmed — Frontend Engineer specializing in React, Next.js, and DevOps automation using Terraform, Jenkins, and Ansible.",
  metadataBase: new URL("https://hannanahmed.dev"), // replace with your domain
  openGraph: {
    title: "Hannan Ahmed — Software Engineer",
    description:
      "Frontend-focused engineer with expertise in React, Next.js, and modern DevOps tooling.",
    url: "https://hannanahmed.dev",
    siteName: "Hannan Ahmed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hannan Ahmed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannan Ahmed — Software Engineer",
    description:
      "Frontend & DevOps Engineer | React | Next.js | AWS | Terraform | Jenkins | Ansible",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/og-image.png", type: "image/png" },
    ],
    shortcut: ["/og-image.png"],
    apple: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <SmoothScrollProvider>


        {/* Global Background with Fading & Radial Patterns */}
        <GlobalBackground />
        
        {/* Floating Particles Overlay */}
        <div className="fixed inset-0 pointer-events-none -z-5">
          <FloatingParticles count={8} color="bg-hgreen-400" movementDistance={30} />
          <FloatingParticles count={5} color="bg-blue-300" movementDistance={40} duration={6} />
        </div>
        
        {/* Navigation */}
        <NavBar />
        
        {/* Main Content */}
        <main className="pt-20 relative z-10">
          {children}
        </main>
        
        </SmoothScrollProvider>

      </body>
    </html>
  );
}