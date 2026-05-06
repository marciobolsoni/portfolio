import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://marciobolsoni.cloud"),
  title: {
    default: "Marcio Bolsoni — AWS Cloud Engineer",
    template: "%s — Marcio Bolsoni",
  },
  description:
    "AWS-certified Cloud Engineer based in Ireland. Designing scalable serverless, container, and IaC solutions on AWS.",
  keywords: [
    "AWS",
    "Cloud Engineer",
    "DevOps",
    "Terraform",
    "Kubernetes",
    "Serverless",
    "Ireland",
    "Marcio Bolsoni",
  ],
  authors: [{ name: "Marcio Bolsoni" }],
  openGraph: {
    title: "Marcio Bolsoni — AWS Cloud Engineer",
    description:
      "AWS-certified Cloud Engineer designing scalable serverless, container and IaC solutions.",
    url: "https://marciobolsoni.cloud",
    siteName: "Marcio Bolsoni",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bg text-ink antialiased">
        <div className="fixed inset-0 -z-10 bg-hero-gradient pointer-events-none" />
        <div className="fixed inset-0 -z-10 starfield opacity-50 pointer-events-none" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
