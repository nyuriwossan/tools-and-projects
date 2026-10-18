/**
 * ツール一覧データ
 *
 * 掲載は手動登録のみです（GitHubのリポジトリを自動で拾う仕組みはありません）。
 * 公開を確認したツールだけを1件ずつ追加してください。
 * 件数表示やカテゴリ目次は、この配列から自動で計算されます。
 */

export type Tool = {
  /** カードの見出し（正式名称） */
  title: string;
  /** 正式名称の別表記など。カード見出しの下に小さく表示（任意） */
  alias?: string;
  /** 何ができるかを1〜2文で */
  description: string;
  /** 公開URL（GitHub Pages） */
  href: string;
  /** カード上部の英字ラベル */
  label: string;
  /** サムネイル上に重ねる短い用途ラベル（日本語12〜20字目安） */
  purpose?: string;
  /** 操作画面のサムネイル（16:10・960×600のWebP推奨）。未登録なら代替表示になる */
  thumbnail?: ToolThumbnail;
};

export type ToolThumbnail = {
  /** public/ からのパス（例：/thumbnails/plot-workshop.webp） */
  src: `/${string}`;
  /** 画像に写っている操作画面の説明 */
  alt: string;
};

export type ToolGroup = {
  /** ページ内リンク用のID（英小文字・ハイフン） */
  id: string;
  /** カテゴリ見出し（英字） */
  title: string;
  /** 目次やスマートフォン表示で使う短い日本語名 */
  shortTitle: string;
  /** カテゴリの説明文 */
  subtitle: string;
  tools: Tool[];
};

export const educationTools: Tool[] = [
  {
    title: "中学校国語ガチャ",
    description:
      "学年・教材・言語活動などを組み合わせ、国語授業の構想を広げるきっかけを提案します。",
    href: "https://nyuriwossan.github.io/kokugo-lesson-design-gacha/",
    label: "国語・授業設計",
  },
  {
    title: "道徳タネガチャ",
    description:
      "主題や場面から、道徳授業の発問・活動アイデアの「タネ」を引き出します。",
    href: "https://nyuriwossan.github.io/doutoku-lesson-seed-gacha/",
    label: "道徳・授業設計",
  },
];

export const creativeGroups: ToolGroup[] = [
  {
    id: "prompt",
    title: "Prompt / Workshop",
    shortTitle: "画像プロンプト",
    subtitle: "要素・背景・構図を言葉に組み立て、一枚の解像度を上げる。",
    tools: [
      {
        title: "AI画像プロンプトビルダー",
        description:
          "髪・目・表情などをタップで選び、英語タグをまとめてコピー。",
        href: "https://nyuriwossan.github.io/ai-image-builder/app/",
        label: "PROMPT BUILDER",
        purpose: "要素を選んでプロンプト作成",
        thumbnail: {
          src: "/thumbnails/ai-image-builder.webp",
          alt: "AI画像プロンプトビルダーの操作画面。年齢感や体格のタグを選ぶと、画面下部に英語のプロンプトが組み上がっている。",
        },
      },
      {
        title: "背景プロンプト工房",
        description:
          "場所・光・天候・視点を選び、背景用の英語プロンプトを作成。",
        href: "https://nyuriwossan.github.io/background-prompt-workshop/",
        label: "BACKGROUND",
        purpose: "背景を一つの場面として設計",
        thumbnail: {
          src: "/thumbnails/background-prompt-workshop.webp",
          alt: "背景プロンプト工房の操作画面。「雨の夜の街」を読み込み、左で場所や空間を選ぶと右に背景プロンプトが表示されている。",
        },
      },
      {
        title: "ポーズ・構図プロンプト工房",
        description:
          "姿勢・視線・画角を整理し、矛盾のない構図プロンプトに。",
        href: "https://nyuriwossan.github.io/pose-composition-workshop/",
        label: "POSE / COMPOSITION",
        purpose: "ポーズとカメラ構図を組み立てる",
        thumbnail: {
          src: "/thumbnails/pose-composition-workshop.webp",
          alt: "ポーズ・構図プロンプト工房の確認と出力画面。立ち姿のプリセットから作った構造と、英語のプロンプトが並んでいる。",
        },
      },
    ],
  },
  {
    id: "look",
    title: "Look / Fashion",
    shortTitle: "外見・衣装",
    subtitle: "顔立ちや体つきから衣装まで、ひとりの姿を描き分ける。",
    tools: [
      {
        title: "キャラクター外見設計工房",
        description:
          "部位ごとに選んだ外見を英語タグに変換。顔の設定は保存して使い回せる。",
        href: "https://nyuriwossan.github.io/character-appearance-prompt-workshop/",
        label: "APPEARANCE",
        purpose: "顔・髪・体つきを部位ごとに設計",
        thumbnail: {
          src: "/thumbnails/character-appearance-prompt-workshop.webp",
          alt: "キャラクター外見設計工房の出力画面。選んだ9項目から、短縮・詳細・素体の3種類のプロンプトが生成されている。",
        },
      },
      {
        title: "獣人プロンプト工房",
        description:
          "種族・獣化度・表情を選ぶだけで、獣人キャラのプロンプトが完成。",
        href: "https://nyuriwossan.github.io/kemono-prompt-workshop/",
        label: "KEMONO",
        purpose: "種族と獣化レベルから獣人を作る",
        thumbnail: {
          src: "/thumbnails/kemono-prompt-workshop.webp",
          alt: "獣人プロンプト工房の操作画面。動物アイコンから種族を選び、右側に日本語設定と英語プロンプトが完成している。",
        },
      },
      {
        title: "衣装プロンプト工房",
        description:
          "プリセットや細かな選択から、衣装を一着の英語プロンプトに。",
        href: "https://nyuriwossan.github.io/outfit-prompt-workshop/",
        label: "OUTFIT",
        purpose: "衣装の形・素材・配色を組み立てる",
        thumbnail: {
          src: "/thumbnails/outfit-prompt-workshop.webp",
          alt: "衣装プロンプト工房で「騎士」のプリセットを開いた画面。配色の見本と、衣装の英語プロンプトが表示されている。",
        },
      },
      {
        title: "コンセプトファッション工房",
        description:
          "感情・神話・民族衣装などのモチーフを、映える衣装プロンプトに。",
        href: "https://nyuriwossan.github.io/concept-fashion-workshop/",
        label: "CONCEPT FASHION",
        purpose: "テーマを衣装デザインに変換",
        thumbnail: {
          src: "/thumbnails/concept-fashion-workshop.webp",
          alt: "コンセプトファッション工房の操作画面。大きなテーマを選ぶと、右側に仕立て上がりの衣装プロンプトが表示されている。",
        },
      },
    ],
  },
  {
    id: "training",
    title: "LoRA / Training",
    shortTitle: "LoRA学習",
    subtitle: "学習の設計を、抜けなく丁寧に。",
    tools: [
      {
        title: "LoRA学習プロンプト工房",
        description:
          "生成環境・目的・属性の配分を決め、学習画像のプロンプトを一括で計画。",
        href: "https://nyuriwossan.github.io/lora-training-prompt-workshop/",
        label: "LORA TRAINING",
        purpose: "学習用画像セットを計画する",
        thumbnail: {
          src: "/thumbnails/lora-training-prompt-workshop.webp",
          alt: "LoRA学習プロンプト工房の計画確認画面。30枚の学習計画と、構図・顔の向きなどの属性配分がグラフで表示されている。",
        },
      },
    ],
  },
  {
    id: "character",
    title: "Character / OC",
    shortTitle: "キャラ設定",
    subtitle: "まだ名前のない誰かに、輪郭を与える。",
    tools: [
      {
        title: "創作OCメーカー",
        description:
          "世界観や性別を選ぶと、名前・外見・性格つきのOCの種を生成。",
        href: "https://nyuriwossan.github.io/creative-oc-maker/",
        label: "OC MAKER",
        purpose: "オリジナルキャラを自動生成",
        thumbnail: {
          src: "/thumbnails/creative-oc-maker.webp",
          alt: "創作OCメーカーの生成結果。キャッチコピー、名前、年齢、外見、性格などのプロフィールが一覧になっている。",
        },
      },
      {
        title: "創作OC倉庫",
        description:
          "OCの設定・プロット・画像をまとめて保存。タグで絞り込みもできる。",
        href: "https://nyuriwossan.github.io/oc-souko/",
        label: "OC ARCHIVE",
        purpose: "キャラ設定を保管・整理する",
        thumbnail: {
          src: "/thumbnails/oc-souko.webp",
          alt: "創作OC倉庫の一覧画面。検索欄とタグの絞り込みの下に、保存したOCがカードで並んでいる。",
        },
      },
    ],
  },
  {
    id: "ai-chat",
    title: "AI Chat / Roleplay",
    shortTitle: "AIチャット",
    subtitle: "物語を走らせる前の、仕込みと点検。プロット・ロアブック・紹介文を整える。",
    tools: [
      {
        title: "プロット設計工房",
        description:
          "カードを選び、Zeta・Zetter向けの指示文を作成。",
        href: "https://nyuriwossan.github.io/plot-workshop/",
        label: "PLOT DESIGN",
        purpose: "AIチャットの設定を組み立てる",
        thumbnail: {
          src: "/thumbnails/plot-workshop.webp",
          alt: "プロット設計工房のカード選択画面。困りごとを防ぐカードをオンにすると、指示文と字数の目安が表示されている。",
        },
      },
      {
        title: "Lorebook Lab",
        alias: "ロアブック検証ラボ",
        description:
          "キーワードの一致箇所や誤発火・拾い漏れを確認。",
        href: "https://nyuriwossan.github.io/lorebook-lab/",
        label: "LOREBOOK",
        purpose: "ロアブックの発火候補を検証",
        thumbnail: {
          src: "/thumbnails/lorebook-lab.webp",
          alt: "Lorebook Labの照合画面。ユーザー発言とAI生成文を入れ、一致したキーワードの件数と項目が表示されている。",
        },
      },
      {
        title: "AIチャット装飾工房",
        description:
          "テンプレートに書き込むだけで、Markdownの装飾つき文章をコピー。",
        href: "https://nyuriwossan.github.io/chat-deco-workshop/",
        label: "CHAT DECO",
        purpose: "紹介文や設定をきれいに飾る",
        thumbnail: {
          src: "/thumbnails/chat-deco-workshop.webp",
          alt: "AIチャット装飾工房でキャラクター紹介テンプレートを編集している画面。左の入力欄と、右の装飾プレビューが並んでいる。",
        },
      },
    ],
  },
  {
    id: "support",
    title: "Idea / Support",
    shortTitle: "アイデア・辞典",
    subtitle: "思いがけない着火点と、迷ったときの辞典。",
    tools: [
      {
        title: "創作アイデアガチャ",
        description:
          "世界観・ジャンル・関係性を引き、気に入った要素は固定して引き直し。",
        href: "https://nyuriwossan.github.io/creative-idea-gacha/",
        label: "IDEA GACHA",
        purpose: "物語のタネをガチャで引く",
        thumbnail: {
          src: "/thumbnails/creative-idea-gacha.webp",
          alt: "創作アイデアガチャの抽選結果。世界観・ジャンル・関係性のカードに、それぞれ固定と引き直しのボタンがある。",
        },
      },
      {
        title: "美青年錬成ガチャ",
        description:
          "容姿や衣装を組み合わせ、画像生成用プロンプトを作成。",
        href: "https://nyuriwossan.github.io/bishounen-prompt-gacha/",
        label: "BISHOUNEN GACHA",
        purpose: "美青年をランダム生成",
        thumbnail: {
          src: "/thumbnails/bishounen-prompt-gacha.webp",
          alt: "美青年錬成ガチャの抽選結果。錬成された人物の名前と特徴の下に、抽選モードとおまかせスタイルが並んでいる。",
        },
      },
      {
        title: "画像タグ辞典",
        description:
          "「眠そう」など日本語で検索し、英語タグや近い表現を見つけられる。",
        href: "https://nyuriwossan.github.io/ai-image-tag-dictionary/",
        label: "TAG DICTIONARY",
        purpose: "日本語から画像生成タグを探す",
        thumbnail: {
          src: "/thumbnails/ai-image-tag-dictionary.webp",
          alt: "画像タグ辞典で「眠そう」と検索した画面。近い候補と、英語タグつきの検索結果が表示されている。",
        },
      },
    ],
  },
];

export type AuthorLink = {
  /** サービス名 */
  service: string;
  /** そこで見られるもの */
  description: string;
  href: string;
  /** 表示する小さなアイコンの種類 */
  icon: "palette" | "chat" | "note";
};

/** 創作ページの作者紹介欄に出す活動先（教育ページでは使わない） */
export const authorLinks: AuthorLink[] = [
  {
    service: "PixAI",
    description: "イラスト・LoRA",
    href: "https://pixai.art/@nyuriwo",
    icon: "palette",
  },
  {
    service: "Zeta",
    description: "AIキャラクター",
    href: "https://zeta-ai.io/@nyuriwossan?share_id=p2sxfxagu",
    icon: "chat",
  },
  {
    service: "X",
    description: "制作記録・お知らせ",
    href: "https://x.com/nyuriwo_ssan?s=11&t=5dVi2HGlu-DC1pLqi3RZCg",
    icon: "note",
  },
];

/** 創作ツールの総数（登録データから自動計算） */
export const creativeToolCount = creativeGroups.reduce(
  (total, group) => total + group.tools.length,
  0,
);

/** 創作カテゴリ数（登録データから自動計算） */
export const creativeCategoryCount = creativeGroups.length;

/** 2桁ゼロ埋め（01, 02 …） */
export function pad2(value: number) {
  return String(value).padStart(2, "0");
}
