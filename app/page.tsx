import type { Metadata } from "next";
import { pageHref } from "./site-path";

export const metadata: Metadata = {
  title: "Tools & Projects",
  description: "教育支援とAI創作、目的に合わせて選べるツールポータル。",
};

export const dynamic = "force-static";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <div className="portal-page">
      <a className="skip-link" href="#main">
        本文へ移動
      </a>
      <header className="portal-header">
        <div className="portal-brand" aria-label="Tools and Projects">
          <span className="portal-brand-mark" aria-hidden="true" />
          <span>TOOLS / PROJECTS</span>
        </div>
        <p>SELECT YOUR ENTRANCE</p>
      </header>

      <main id="main" className="portal-main">
        <section className="portal-intro" aria-labelledby="portal-title">
          <p className="eyebrow">A SMALL COLLECTION OF USEFUL THINGS</p>
          <h1 id="portal-title">
            Tools <i>&amp;</i> Projects
          </h1>
          <p className="portal-lead">
            教育の現場を支える小さな道具と、AI創作のための実験室。
            <br />
            目的に合う入口を選んでください。
          </p>
        </section>

        <section className="entrance-grid" aria-label="コンテンツを選ぶ">
          <a href={pageHref("/education")} className="entrance-card entrance-education">
            <span className="entrance-number">01</span>
            <div className="entrance-body">
              <p className="entrance-label">EDUCATION / WORK</p>
              <h2>教育・仕事系</h2>
              <p>授業設計を支える、端正でシンプルな教育支援ツール。</p>
              <div className="entrance-tags" aria-hidden="true">
                <span>国語</span>
                <span>道徳</span>
                <span>授業づくり</span>
              </div>
            </div>
            <span className="entrance-action">
              ツールを見る <Arrow />
            </span>
          </a>

          <a href={pageHref("/creative")} className="entrance-card entrance-creative">
            <span className="entrance-number">02</span>
            <div className="creative-orbit" aria-hidden="true">
              <span />
            </div>
            <div className="entrance-body">
              <p className="entrance-label">AI / CREATIVE</p>
              <h2>AI・創作系</h2>
              <p>プロンプト、LoRA、OC制作。偏愛と実用のための工房。</p>
              <div className="entrance-tags" aria-hidden="true">
                <span>PROMPT</span>
                <span>LoRA</span>
                <span>OC</span>
              </div>
            </div>
            <span className="entrance-action">
              工房へ入る <Arrow />
            </span>
          </a>
        </section>
      </main>

      <footer className="portal-footer">
        <p>TOOLS &amp; PROJECTS — 2026</p>
        <span aria-hidden="true">SCROLL TO CHOOSE</span>
      </footer>
    </div>
  );
}
