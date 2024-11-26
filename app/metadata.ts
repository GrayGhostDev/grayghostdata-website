import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Gray Ghost Data",
    default: "Gray Ghost Data - Data Analytics & Cloud Security Solutions",
  },
  description:
    "Professional data analytics, cloud security, and blockchain solutions for modern businesses.",
  keywords: [
    "data analytics",
    "cloud security",
    "blockchain",
    "business intelligence",
    "cybersecurity",
    "data solutions",
  ],
  openGraph: {
    title: "Gray Ghost Data Consultants LLC",
    description: "Enterprise-grade cybersecurity solutions and data analytics",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gray Ghost Data Consultants LLC",
    description: "Enterprise-grade cybersecurity solutions and data analytics",
    images: ["/og-image.jpg"],
  },
};
