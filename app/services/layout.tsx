import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Anders Lundbäck",
  description:
    "Freelance product consulting from Lundback Product Consulting AB: discovery, roadmapping, backlog and customer research.",
  alternates: { canonical: "/services" },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
