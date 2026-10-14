import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off the clock | Anders Lundbäck",
  description:
    "What Anders Lundbäck does outside of work: chess, disc golf, his golden retriever, games and movies.",
  alternates: { canonical: "/interests" },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
