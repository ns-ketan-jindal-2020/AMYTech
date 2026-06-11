import { SiteHeader } from "@/components/site-header";
import {
  ArchitectureSection,
  CapabilitiesSection,
  ContactSection,
  EngagementSection,
  HeroSection,
  InsightsSection,
  OverviewSection,
  PlatformSection,
  ProcessSection,
  ServicesSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <PlatformSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ArchitectureSection />
      <InsightsSection />
      <EngagementSection />
      <ContactSection />
    </main>
  );
}
