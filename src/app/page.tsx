import Header from "@/components/header";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import Certifications from "@/components/certifications";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { siteConfig } from "@/lib/seo";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gaëtan Carré",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/profile.png`,
    jobTitle: "Software Engineer Infrastructure",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    sameAs: [
      "https://github.com/GaetanCARRE",
      "https://www.linkedin.com/in/gaetan-carre",
    ],
    knowsAbout: [
      "Go",
      "Python",
      "TypeScript",
      "DevNetOps",
      "Network automation",
      "Cloud infrastructure",
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
