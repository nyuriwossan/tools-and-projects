import type { Metadata } from "next";
import { educationTools } from "../data";
import { absoluteAssetUrl } from "../site-path";

const educationDescription = "国語・道徳・授業設計を支える個人制作Webツール。";
// 教育ページは創作ページと切り離して共有されるよう、
// 共有用の文言・画像をポータル共通設定から上書きする
const educationShareImage = {
  url: absoluteAssetUrl("/og-education.png"),
  width: 1200,
  height: 630,
  alt: "教育支援ツール — 授業づくりを、少し便利に。",
};

export const metadata: Metadata = {
  title: "教育支援ツール",
  description: educationDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "教育支援ツール",
    description: educationDescription,
    images: [educationShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "教育支援ツール",
    description: educationDescription,
    images: [educationShareImage.url],
  },
};

export const dynamic = "force-static";

export default function EducationPage() {
  return (
    <div className="education-page">
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <header className="education-header">
        <div className="education-brand">
          <span className="education-brand-mark" aria-hidden="true">
            E
          </span>
          <div>
            <strong>EDUCATIONAL TOOLS</strong>
            <small>FOR LESSON SUPPORT</small>
          </div>
        </div>
        <p className="education-header-note">すぐに使える、授業づくりの小さな道具</p>
      </header>

      <main id="main">
        <section className="education-hero" aria-labelledby="education-title">
          <div className="education-hero-copy">
            <p className="education-kicker">LESSON DESIGN / WEB TOOLS</p>
            <h1 id="education-title">
              授業づくりを、
              <br />
              <em>少し便利に。</em>
            </h1>
            <p>
              国語・道徳・授業設計を支える、個人制作の教育支援Webツールです。
              複雑な準備をせず、その場ですぐに使えます。
            </p>
          </div>
          <div className="education-hero-index" aria-hidden="true">
            <span>TOOLS</span>
            <strong>{String(educationTools.length).padStart(2, "0")}</strong>
            <small>AVAILABLE NOW</small>
          </div>
        </section>

        <section className="education-tools" aria-labelledby="education-tools-title">
          <div className="education-section-heading">
            <p>TOOL INDEX</p>
            <h2 id="education-tools-title">教育支援ツール</h2>
            <span>{String(educationTools.length).padStart(2, "0")} ITEMS</span>
          </div>

          <div className="education-card-list">
            {educationTools.map((tool, index) => (
              <article className="education-card" key={tool.href}>
                <span className="education-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="education-card-copy">
                  <p className="education-card-label">{tool.label}</p>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>
                <a
                  className="education-tool-link"
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${tool.title}を新しいタブで開く`}
                >
                  ツールを開く <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="education-footer">
        <p>個人制作の教育支援ツールです。</p>
        <span>EDUCATIONAL TOOLS FOR LESSON SUPPORT</span>
      </footer>
    </div>
  );
}
