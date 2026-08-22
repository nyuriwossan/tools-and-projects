import type { Metadata } from "next";
import { creativeGroups } from "../data";

export const metadata: Metadata = {
  title: "にゅりヲ｜AI創作工房",
  description: "プロンプト、LoRA、OC制作を支えるAI創作ツールポータル。",
};

export const dynamic = "force-static";

export default function CreativePage() {
  return (
    <div className="creative-page">
      <a className="skip-link skip-link-dark" href="#main">
        本文へ移動
      </a>
      <header className="creative-header">
        <a className="creative-brand" href="/" aria-label="ポータルのトップへ">
          <span>NYURIWO</span>
          <small>CREATIVE LAB / EST. 2026</small>
        </a>
        <nav aria-label="関連ページ">
          <a href="#collection">COLLECTION</a>
          <a href="/education">教育向けツール</a>
        </nav>
      </header>

      <main id="main">
        <section className="creative-hero" aria-labelledby="creative-title">
          <div className="creative-hero-copy">
            <p className="creative-kicker">
              AI CREATION / PROMPT DESIGN / STRANGE IDEAS
            </p>
            <h1 id="creative-title">
              偏愛と実用の、
              <br />
              <em>AI創作工房。</em>
            </h1>
            <p className="creative-lead">
              プロンプト、LoRA、OC制作。
              <br />
              少し偏っていて、だいぶ実用的な道具を集めました。
            </p>
            <a className="creative-scroll-link" href="#collection">
              工房の道具を見る <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="creative-author" aria-label="作者情報">
            <div className="creative-author-frame">
              <span className="creative-frame-corner" aria-hidden="true" />
              <img
                src="/creative-author-icon.png"
                alt="青いブラキオサウルスの作者アイコン"
                width="1254"
                height="1254"
              />
            </div>
            <div className="creative-author-meta">
              <p>THE MAKER</p>
              <h2>にゅりヲ</h2>
              <span>工具と恐竜と、創作の寄り道。</span>
            </div>
          </aside>
        </section>

        <section className="creative-manifesto" aria-label="工房について">
          <p>
            <span aria-hidden="true">✦</span>
            思いつきを、使えるかたちへ。
          </p>
          <p>
            ここはAI画像生成と創作支援のための、小さくて少し様子のおかしい工房です。
          </p>
        </section>

        <section id="collection" className="creative-collection" aria-labelledby="collection-title">
          <div className="creative-section-heading">
            <p>THE COLLECTION</p>
            <h2 id="collection-title">工房の道具</h2>
            <span>9 TOOLS / 4 CATEGORIES</span>
          </div>

          {creativeGroups.map((group, groupIndex) => (
            <section className="creative-group" key={group.id} aria-labelledby={`${group.id}-title`}>
              <div className="creative-group-heading">
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h3 id={`${group.id}-title`}>{group.title}</h3>
                  <p>{group.subtitle}</p>
                </div>
              </div>

              <div className="creative-card-grid">
                {group.tools.map((tool, toolIndex) => (
                  <article className="creative-card" key={tool.href}>
                    <div className="creative-card-topline">
                      <span>{tool.label}</span>
                      <small aria-hidden="true">
                        {String(groupIndex + 1).padStart(2, "0")}.
                        {String(toolIndex + 1).padStart(2, "0")}
                      </small>
                    </div>
                    <h4>{tool.title}</h4>
                    <p>{tool.description}</p>
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${tool.title}を新しいタブで開く`}
                    >
                      OPEN TOOL <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <aside className="creative-education-link" aria-label="教育向けツールの案内">
          <p>ANOTHER COLLECTION</p>
          <div>
            <h2>教育支援ツールも公開しています。</h2>
            <a href="/education">
              EDUCATIONAL TOOLS <span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>
      </main>

      <footer className="creative-footer">
        <div>
          <strong>にゅりヲ</strong>
          <span>AI CREATIVE TOOLS &amp; ODD LITTLE PROJECTS</span>
        </div>
        <a href="/">BACK TO PORTAL ↑</a>
      </footer>
    </div>
  );
}
