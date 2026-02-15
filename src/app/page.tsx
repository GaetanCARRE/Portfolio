import Header from "@/components/header";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TechStack />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
