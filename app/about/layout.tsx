import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Anders Lundbäck",
  description:
    "About Anders Lundbäck, product leader and founder of Lundback Product Consulting AB.",
  alternates: { canonical: "/about" },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
