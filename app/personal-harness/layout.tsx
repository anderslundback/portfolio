import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "anderslundback-harness | Anders Lundbäck",
  description:
    "A personal AI assistant for its owner, Anders Lundbäck, to use Gmail, Google Calendar and Google Drive by talking to Claude.",
};

export default function PersonalHarnessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
