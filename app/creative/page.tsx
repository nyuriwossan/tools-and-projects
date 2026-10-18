import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  authorLinks,
  creativeCategoryCount,
  creativeGroups,
  creativeToolCount,
  pad2,
  type AuthorLink,
} from "../data";
import { assetHref, pageHref } from "../site-path";

export const metadata: Metadata = {
  title: "にゅりヲ｜AI創作工房",
  description: "プロンプト、LoRA、OC制作、AIチャットを支えるAI創作ツールポータル。",
};

export const dynamic = "force-static";

/** 作者リンク用の小さな線画アイコン（公式ロゴは使わない） */
function AuthorLinkIcon({ icon }: { icon: AuthorLink["icon"] }) {
  const paths: Record<AuthorLink["icon"], ReactNode> = {
    palette: (
      <>
        <path d="M12 3.5c-4.9 0-8.5 3.5-8.5 7.9 0 3.6 2.7 6.1 5.6 6.1 1.4 0 1.7-1 1.7-1.8 0-1.2 1-2 2.2-2h2.1c2.7 0 5.4-1.9 5.4-4.6 0-3.1-3.6-5.6-8.5-5.6Z" />
        <circle cx="8" cy="10" r="1" />
        <circle cx="11.5" cy="7.6" r="1" />
        <circle cx="15.4" cy="8.6" r="1" />
      </>
    ),
    chat: (
      <>
        <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H11l-4.2 3.3V16H6.5a2 2 0 0 1-2-2Z" />
        <path d="M8.5 9h7M8.5 12h4.5" />
      </>
    ),
    note: (
      <>
        <path d="M6.5 3.5h8l3 3v14h-11Z" />
        <path d="M14.5 3.5v3h3M9 11h6M9 14h6M9 17h3.5" />
      </>
    ),
  };

  return (
    <svg
      className="creative-author-link-icon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[icon]}
    </svg>
  );
}

export default function CreativePage() {
  return (
    <div className="creative-page">
      <a className="skip-link skip-link-dark" href="#main">
        本文へ移動
      </a>
      <header className="creative-header">
        <a className="creative-brand" href={pageHref("/")} aria-label="ポータルのトップへ">
          <span>NYURIWO</span>
          <small>CREATIVE LAB / EST. 2026</small>
        </a>
        <nav aria-label="関連ページ">
          <a href="#collection">COLLECTION</a>
          <a href={pageHref("/education")}>教育向けツール</a>
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
              プロンプト、LoRA、OC制作、AIチャット。
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
                src={assetHref("/creative-author-icon.png")}
                alt="青いブラキオサウルスの作者アイコン"
                width="1254"
                height="1254"
              />
            </div>
            <div className="creative-author-meta">
              <p>THE MAKER</p>
              <h2>にゅりヲ</h2>
              <span>工具と恐竜と、創作の寄り道。</span>
              <ul className="creative-author-links" aria-label="作者の活動先">
                {authorLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.service}（${link.description}）を新しいタブで開く`}
                    >
                      <AuthorLinkIcon icon={link.icon} />
                      <span className="creative-author-link-text">
                        <strong>{link.service}</strong>
                        <small>{link.description}</small>
                      </span>
                      <span className="creative-author-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
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
            <span>
              {creativeToolCount} TOOLS / {creativeCategoryCount} CATEGORIES
            </span>
          </div>

          <nav className="creative-index" aria-label="カテゴリ目次">
            <ol>
              {creativeGroups.map((group, groupIndex) => (
                <li key={group.id}>
                  <a href={`#${group.id}`}>
                    <span aria-hidden="true">{pad2(groupIndex + 1)}</span>
                    {group.shortTitle}
                    <small>
                      {group.tools.length}
                      <span className="visually-hidden">件</span>
                    </small>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {creativeGroups.map((group, groupIndex) => (
            <section
              className="creative-group"
              id={group.id}
              key={group.id}
              aria-labelledby={`${group.id}-title`}
            >
              <div className="creative-group-heading">
                <span>{pad2(groupIndex + 1)}</span>
                <div>
                  <h3 id={`${group.id}-title`}>{group.title}</h3>
                  <p className="creative-group-name">
                    {group.shortTitle}
                    <small>{group.tools.length} TOOLS</small>
                  </p>
                  <p>{group.subtitle}</p>
                </div>
              </div>

              <div className="creative-card-grid">
                {group.tools.map((tool, toolIndex) => (
                  <article className="creative-card" key={tool.href}>
                    <div className="creative-card-topline">
                      <span>{tool.label}</span>
                      <small aria-hidden="true">
                        {pad2(groupIndex + 1)}.{pad2(toolIndex + 1)}
                      </small>
                    </div>
                    <h4>{tool.title}</h4>
                    {tool.alias ? (
                      <p className="creative-card-alias">{tool.alias}</p>
                    ) : null}
                    <p className="creative-card-description">{tool.description}</p>
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
            <a href={pageHref("/education")}>
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
        <a href={pageHref("/")}>BACK TO PORTAL ↑</a>
      </footer>
    </div>
  );
}
