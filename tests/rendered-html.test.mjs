import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

// `pnpm test` は vinext build の後にこのファイルを実行し、
// 書き出された静的HTMLとデータ定義を検査します。

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

// Node 22.18以降は型注釈つきの .ts をそのまま読み込める
const loadData = () => import("../app/data.ts");

const siteOrigin = "https://nyuriwossan.github.io/";

test("創作ツールのデータが正しく登録されている", async () => {
  const { creativeGroups, creativeToolCount, creativeCategoryCount } =
    await loadData();

  const tools = creativeGroups.flatMap((group) => group.tools);
  assert.equal(creativeToolCount, tools.length);
  assert.equal(creativeCategoryCount, creativeGroups.length);

  const groupIds = creativeGroups.map((group) => group.id);
  assert.equal(new Set(groupIds).size, groupIds.length, "カテゴリIDが重複");
  for (const id of groupIds) {
    assert.match(id, /^[a-z][a-z0-9-]*$/, `カテゴリIDの形式: ${id}`);
  }

  for (const group of creativeGroups) {
    assert.ok(group.title && group.shortTitle && group.subtitle, group.id);
    assert.ok(group.tools.length > 0, `空のカテゴリ: ${group.id}`);
  }

  const hrefs = tools.map((tool) => tool.href);
  assert.equal(new Set(hrefs).size, hrefs.length, "同じURLが重複登録されている");
  const titles = tools.map((tool) => tool.title);
  assert.equal(new Set(titles).size, titles.length, "同じ名前が重複登録されている");

  for (const tool of tools) {
    assert.ok(tool.title && tool.description && tool.label, tool.href);
    assert.ok(tool.href.startsWith(siteOrigin), `公開URLの形式: ${tool.href}`);
    assert.ok(tool.href.endsWith("/"), `末尾スラッシュ: ${tool.href}`);
    assert.ok(tool.description.length <= 80, `説明が長すぎる: ${tool.title}`);
  }
});

test("AI Chat / Roleplay カテゴリに3ツールがまとまっている", async () => {
  const { creativeGroups } = await loadData();
  const chat = creativeGroups.find((group) => group.id === "ai-chat");
  assert.ok(chat);
  assert.deepEqual(
    chat.tools.map((tool) => tool.href).sort(),
    [
      "https://nyuriwossan.github.io/chat-deco-workshop/",
      "https://nyuriwossan.github.io/lorebook-lab/",
      "https://nyuriwossan.github.io/plot-workshop/",
    ],
  );
});

test("教育ツールと創作ツールが混ざっていない", async () => {
  const { creativeGroups, educationTools } = await loadData();
  const creative = new Set(
    creativeGroups.flatMap((group) => group.tools.map((tool) => tool.href)),
  );
  for (const tool of educationTools) {
    assert.ok(!creative.has(tool.href), `両方に登録: ${tool.href}`);
  }
});

test("創作ページに全ツール・正しい件数・目次が出力される", async () => {
  const [html, { creativeGroups, creativeToolCount, creativeCategoryCount }] =
    await Promise.all([read("dist/client/creative.html"), loadData()]);

  assert.match(
    html,
    new RegExp(`${creativeToolCount}(?:<!-- -->)? TOOLS / (?:<!-- -->)?${creativeCategoryCount}(?:<!-- -->)? CATEGORIES`),
  );

  for (const group of creativeGroups) {
    assert.ok(html.includes(`id="${group.id}"`), `カテゴリ: ${group.id}`);
    assert.ok(html.includes(`href="#${group.id}"`), `目次: ${group.id}`);
    for (const tool of group.tools) {
      assert.ok(html.includes(`href="${tool.href}"`), `リンク: ${tool.title}`);
    }
  }
});

test("教育ページから創作ページへのリンクがない", async () => {
  const [html, { creativeGroups }] = await Promise.all([
    read("dist/client/education.html"),
    loadData(),
  ]);

  assert.doesNotMatch(html, /href="[^"]*\/creative(?:\.html)?"/);
  for (const tool of creativeGroups.flatMap((group) => group.tools)) {
    assert.ok(!html.includes(tool.href), `教育ページに創作リンク: ${tool.href}`);
  }
});

test("教育ページの共有用情報に創作側の文言・画像が含まれない", async () => {
  const html = await read("dist/client/education.html");
  const head = html.slice(0, html.indexOf("</head>"));

  assert.doesNotMatch(head, /創作|にゅりヲ|creative/i);
  assert.doesNotMatch(head, /\/og\.png/);
  assert.match(head, /property="og:image" content="[^"]*\/og-education\.png"/);
  assert.match(head, /name="twitter:image" content="[^"]*\/og-education\.png"/);
  assert.match(head, /property="og:title" content="教育支援ツール"/);
});

test("作者紹介欄に活動先リンク3件が正しく出力される", async () => {
  const [html, { authorLinks }] = await Promise.all([
    read("dist/client/creative.html"),
    loadData(),
  ]);

  assert.deepEqual(
    authorLinks.map((link) => link.href),
    [
      "https://pixai.art/@nyuriwo",
      "https://zeta-ai.io/@nyuriwossan?share_id=p2sxfxagu",
      "https://x.com/nyuriwo_ssan?s=11&t=5dVi2HGlu-DC1pLqi3RZCg",
    ],
  );

  const authorBlock = html.slice(
    html.indexOf('class="creative-author"'),
    html.indexOf('class="creative-manifesto"'),
  );
  assert.ok(authorBlock.includes("THE MAKER"));
  assert.ok(authorBlock.includes("にゅりヲ"));
  assert.ok(authorBlock.includes("工具と恐竜と、創作の寄り道。"));
  assert.ok(authorBlock.includes("creative-author-icon.png"));

  for (const link of authorLinks) {
    const href = link.href.replaceAll("&", "&amp;");
    const tag = authorBlock.match(new RegExp(`<a[^>]*href="${href.replace(/[.?]/g, "\\$&")}"[^>]*>`));
    assert.ok(tag, `リンクがない: ${link.service}`);
    assert.match(tag[0], /target="_blank"/);
    assert.match(tag[0], /rel="noopener noreferrer"/);
  }
});

test("教育ページとトップページに作者の活動先リンクがない", async () => {
  const pages = await Promise.all([
    read("dist/client/education.html"),
    read("dist/client/index.html"),
  ]);
  for (const html of pages) {
    assert.doesNotMatch(html, /pixai\.art|zeta-ai\.io|x\.com\/nyuriwo/);
  }
});
