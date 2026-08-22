import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Tools & Projects",
    template: "%s — Tools & Projects",
  },
  description: "教育支援とAI創作、目的に合わせて選べるツールポータル。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Tools & Projects",
    description: "教育支援とAI創作、目的に合わせて選べるツールポータル。",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Tools & Projects — Education / Creative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools & Projects",
    description: "教育支援とAI創作、目的に合わせて選べるツールポータル。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
