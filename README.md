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
pnpm exec vinext build
```

ビルド後の `out/` が、そのまま静的ホスティングへ配置できる成果物です。

## GitHub Pagesで公開する

1. GitHubリポジトリの **Settings → Pages** を開く
2. GitHub Actionsでビルドし、生成された `out/` をPagesへアップロードする
3. プロジェクトサイト（`https://ユーザー名.github.io/リポジトリ名/`）に置く場合は、公開パスに合わせて `next.config.ts` の `basePath` と `assetPrefix` を設定する

ユーザーサイトや独自ドメインのルートで公開する場合、追加のパス設定は不要です。

## ツールを追加・更新する

ツール情報は `app/data.ts` に集約しています。

- 教育ツール：`educationTools` 配列へ1件追加
- 創作ツール：`creativeGroups` の該当カテゴリ内へ1件追加
- 新しい創作カテゴリ：`creativeGroups` へグループごと追加

各ツールは `title`、`description`、`href`、`label` の4項目で管理します。表示カードは各ページで配列から自動生成されます。

創作ツールの総数を変えた場合は、`app/creative/page.tsx` 内のコレクション見出しにある件数表示も更新してください。

## ブラキオ画像を差し替える

`public/creative-author-icon.png` を同じファイル名のPNGへ差し替えます。正方形に近く、背景が白または明るい画像を推奨します。表示サイズはCSS側で自動調整され、教育ページでは読み込まれません。

## 今後の拡張候補

- ツールカードへのサムネイル追加
- カテゴリ絞り込み
- 教育・創作ページの別リポジトリ化
- 独自ドメインの設定
- OGP文言や共有画像の季節更新
