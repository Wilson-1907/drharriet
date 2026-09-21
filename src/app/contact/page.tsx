import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.fullName} for academic enquiries, research collaboration, teaching and digital education engagement.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection />;
}
