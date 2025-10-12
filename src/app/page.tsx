import PageWrapper from "@/components/PageWrapper";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection/>
      <ContactSection />
      <Footer />
    </PageWrapper>
  );
}
