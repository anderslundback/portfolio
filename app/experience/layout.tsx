import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Anders Lundbäck",
  description:
    "Professional experience of product leader Anders Lundbäck.",
  alternates: { canonical: "/experience" },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
