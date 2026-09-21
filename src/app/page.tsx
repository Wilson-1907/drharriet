import { Hero } from "@/components/hero/hero";
import { AcademicSnapshot } from "@/components/hero/academic-snapshot";
import { JourneyNarrative } from "@/components/hero/journey-narrative";
import { TheAcademic } from "@/components/hero/the-academic";
import { EducationSection } from "@/components/timeline/education-section";
import { CareerTimeline } from "@/components/timeline/career-timeline";
import { TheResearcher } from "@/components/research/the-researcher";
import { TheTechnologist } from "@/components/cisco/the-technologist";
import { CiscoFeature } from "@/components/cisco/cisco-feature";
import { TheLeader } from "@/components/leadership/the-leader";
import { NcheAppointment } from "@/components/leadership/nche-appointment";
import { QualityAssurance } from "@/components/leadership/quality-assurance";
import { TheEducator } from "@/components/teaching/the-educator";
import { TheScholar } from "@/components/publications/the-scholar";
import { ContactSection } from "@/components/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AcademicSnapshot />
      <JourneyNarrative />
      <TheAcademic />
      <EducationSection />
      <CareerTimeline />
      <TheResearcher />
      <TheTechnologist />
      <CiscoFeature />
      <TheLeader />
      <NcheAppointment />
      <QualityAssurance />
      <TheEducator />
      <TheScholar />
      <ContactSection />
    </>
  );
}
