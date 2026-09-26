import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ExperienceSection from "../components/ExperienceSection";
import QAWorkflow from "../components/QAWorkflow";
import BugShowcase from "../components/BugShowcase";
import QADashboard from "../components/QADashboard";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <QAWorkflow />
      <QADashboard />
      <BugShowcase />
      <Contact />
    </>
  );
}
