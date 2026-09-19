import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Anders Lundbäck",
  description:
    "Privacy policy for anderslundback-harness, a personal AI assistant operated by Anders Lundbäck.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
