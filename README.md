# Tools & Projects

教育支援ツールとAI創作ツールを、閲覧目的に合わせて案内する二入口ポータルです。

- `/`：中立的なトップページ
- `/education`：匿名運用の教育・仕事系ページ
- `/creative`：にゅりヲ名義のAI・創作系ページ

教育ページから創作ページへのリンクは置いていません。創作ページから教育ページへの案内のみ設けています。

## ディレクトリ構成

```text
app/
├─ page.tsx              # トップページ
├─ education/page.tsx    # 教育・仕事系
├─ creative/page.tsx     # AI・創作系
├─ data.ts               # 全ツールの一覧データ
├─ layout.tsx            # 共通メタ情報
└─ globals.css           # 共通スタイルと各テーマ
public/
├─ creative-author-icon.png
└─ og.png                # 共有用画像（生成後）
```

## ローカルで確認する

Node.js 22.13以降とpnpmを用意し、次の順に実行します。

```bash
pnpm install --ignore-scripts
pnpm exec vinext dev
```

表示されたURL（通常は `http://localhost:3000/`）をブラウザで開いてください。

## 静的ファイルを作る

このサイトは `output: "export"` を使用しており、外部データやサーバー処理に依存しません。

```bash
pnpm run build
```

ビルド後の `dist/client/` が静的ホスティング向けの成果物です。

## GitHub Pagesで公開する

`main` ブランチへのpushをきっかけに、`.github/workflows/deploy-pages.yml` が次を自動実行します。

1. 依存パッケージを固定バージョンでインストール
2. `/tools-and-projects` を公開パスとして静的ビルド
3. 生成された `dist/client/` をGitHub Pagesへ公開

公開URL：<https://nyuriwossan.github.io/tools-and-projects/>

GitHub Pages用の手動ビルドでは、`NEXT_PUBLIC_BASE_PATH=/tools-and-projects` と `NEXT_PUBLIC_SITE_URL=https://nyuriwossan.github.io/tools-and-projects/` を設定して `pnpm run build:pages` を実行します。

## ツールを追加・更新する

ツール情報は `app/data.ts` に集約しています。掲載は手動登録のみで、GitHubのリポジトリを自動で拾う仕組みはありません（公開前や重複するリポジトリが混ざらないようにするため）。

- 教育ツール：`educationTools` 配列へ1件追加
- 創作ツール：`creativeGroups` の該当カテゴリ内の `tools` へ1件追加
- 新しい創作カテゴリ：`creativeGroups` へグループごと追加（`id`・`title`・`shortTitle`・`subtitle`・`tools`）

各ツールは `title`、`description`、`href`、`label` で管理します。正式名称の別表記があれば `alias` に入れると、見出しの下に小さく表示されます。

カード、カテゴリ目次、総数・カテゴリ数・カテゴリ別件数の表示は、すべて配列から自動で計算されます。件数を手で書き換える必要はありません。

### 創作カテゴリ（2026年10月時点）

| 順 | カテゴリ | 内容 |
|---|---|---|
| 01 | Prompt / Workshop（画像プロンプト） | 画面全体・背景・構図 |
| 02 | Look / Fashion（外見・衣装） | 顔立ち・体つき・獣人・衣装 |
| 03 | LoRA / Training（LoRA学習） | 学習データ設計 |
| 04 | Character / OC（キャラ設定） | OCの生成と保管 |
| 05 | AI Chat / Roleplay（AIチャット） | プロット・ロアブック・紹介文の装飾 |
| 06 | Idea / Support（アイデア・辞典） | ガチャとタグ辞典 |

### テスト

`pnpm test` でビルドしたうえで、次を検査します。

- URL・名前の重複がない、公開URLの形式が正しい、説明文が長すぎない
- 創作ページに全ツール・全カテゴリ・正しい件数が出力されている
- 教育ページに創作ページや創作ツールへのリンクがない

## 共有用画像（OGP）

- `public/og.png`：トップページ・創作ページ用
- `public/og-education.png`：教育ページ専用（1200×630）。創作側の名義や画像を含めない

教育ページの共有用タイトル・説明文・画像は `app/education/page.tsx` で個別に設定しています。

## ブラキオ画像を差し替える

`public/creative-author-icon.png` を同じファイル名のPNGへ差し替えます。正方形に近く、背景が白または明るい画像を推奨します。表示サイズはCSS側で自動調整され、教育ページでは読み込まれません。

## 今後の拡張候補

- ツールカードへのサムネイル追加
- カテゴリ絞り込み
- 教育・創作ページの別リポジトリ化
- 独自ドメインの設定
- OGP文言や共有画像の季節更新
