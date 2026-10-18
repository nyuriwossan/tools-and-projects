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
          "要素を選びながら、AI画像生成のプロンプトをすばやく組み立てます。",
        href: "https://nyuriwossan.github.io/ai-image-builder/app/",
        label: "PROMPT BUILDER",
      },
      {
        title: "背景プロンプト工房",
        description:
          "場所、光、空気感を組み合わせ、物語の背景を言葉にします。",
        href: "https://nyuriwossan.github.io/background-prompt-workshop/",
        label: "BACKGROUND",
      },
      {
        title: "ポーズ・構図プロンプト工房",
        description:
          "ポーズとカメラ構図を整理し、狙った一枚に近づけます。",
        href: "https://nyuriwossan.github.io/pose-composition-workshop/",
        label: "POSE / COMPOSITION",
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
          "顔・髪・肌・体つきを部位ごとに選び、英語タグのプロンプトへ変換します。顔の設定を保存して使い回せます。",
        href: "https://nyuriwossan.github.io/character-appearance-prompt-workshop/",
        label: "APPEARANCE",
      },
      {
        title: "獣人プロンプト工房",
        description:
          "種族と獣化レベルを選ぶだけで、獣人キャラクターのプロンプトを作れます。耳やしっぽ、毛色も細かく指定できます。",
        href: "https://nyuriwossan.github.io/kemono-prompt-workshop/",
        label: "KEMONO",
      },
      {
        title: "衣装プロンプト工房",
        description:
          "服装・素材・ディテールを整理して、衣装表現のプロンプトを作ります。",
        href: "https://nyuriwossan.github.io/outfit-prompt-workshop/",
        label: "OUTFIT",
      },
      {
        title: "コンセプトファッション工房",
        description:
          "感情・神話・民族衣装・美術様式などのモチーフを、映える衣装のプロンプトに仕立てます。",
        href: "https://nyuriwossan.github.io/concept-fashion-workshop/",
        label: "CONCEPT FASHION",
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
          "LoRA学習用画像の方向性とプロンプトを、目的に合わせて整理します。",
        href: "https://nyuriwossan.github.io/lora-training-prompt-workshop/",
        label: "LORA TRAINING",
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
          "設定の断片を組み合わせて、オリジナルキャラクターの芯をつくります。",
        href: "https://nyuriwossan.github.io/creative-oc-maker/",
        label: "OC MAKER",
      },
      {
        title: "創作OC倉庫",
        description:
          "生まれたキャラクターの設定を整理し、いつでも振り返れる保管庫です。",
        href: "https://nyuriwossan.github.io/oc-souko/",
        label: "OC ARCHIVE",
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
          "困りごとや演出の希望をカードで選ぶと、Zeta／Zetterの入力欄ごとの指示文に変換します。",
        href: "https://nyuriwossan.github.io/plot-workshop/",
        label: "PLOT DESIGN",
      },
      {
        title: "Lorebook Lab",
        alias: "ロアブック検証ラボ",
        description:
          "ロアブックのキーワードが会話文のどこに一致するか、誤発火や拾い漏れがないかを確かめます。",
        href: "https://nyuriwossan.github.io/lorebook-lab/",
        label: "LOREBOOK",
      },
      {
        title: "AIチャット装飾工房",
        description:
          "キャラクター紹介や世界観の文章を、Markdownを知らなくてもおしゃれに飾れます。",
        href: "https://nyuriwossan.github.io/chat-deco-workshop/",
        label: "CHAT DECO",
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
          "設定やモチーフを偶然に任せ、創作の行き詰まりに風穴を開けます。",
        href: "https://nyuriwossan.github.io/creative-idea-gacha/",
        label: "IDEA GACHA",
      },
      {
        title: "美青年錬成ガチャ",
        description:
          "髪・衣装・世界観などをガチャで錬成。気に入った項目は固定したまま、残りを何度でも引き直せます。",
        href: "https://nyuriwossan.github.io/bishounen-prompt-gacha/",
        label: "BISHOUNEN GACHA",
      },
      {
        title: "画像タグ辞典",
        description:
          "AI画像生成で使うタグを、表現や目的から探せるリファレンスです。",
        href: "https://nyuriwossan.github.io/ai-image-tag-dictionary/",
        label: "TAG DICTIONARY",
      },
    ],
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
