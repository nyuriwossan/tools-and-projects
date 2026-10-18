import type { Metadata } from "next";
import "./globals.css";
import { absoluteAssetUrl, siteUrl } from "./site-path";

const socialImageUrl = absoluteAssetUrl("/og.png");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        url: socialImageUrl,
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
    images: [socialImageUrl],
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
