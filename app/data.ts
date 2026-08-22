export type Tool = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type ToolGroup = {
  id: string;
  title: string;
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
    subtitle: "言葉を組み立て、イメージの解像度を上げる。",
    tools: [
      {
        title: "AI画像プロンプトビルダー",
        description:
          "要素を選びながら、AI画像生成のプロンプトをすばやく組み立てます。",
        href: "https://nyuriwossan.github.io/ai-image-builder/app/",
        label: "PROMPT BUILDER",
      },
      {
        title: "衣装プロンプト工房",
        description:
          "服装・素材・ディテールを整理して、衣装表現のプロンプトを作ります。",
        href: "https://nyuriwossan.github.io/outfit-prompt-workshop/",
        label: "OUTFIT",
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
    id: "training",
    title: "LoRA / Training",
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
    id: "support",
    title: "Idea / Support",
    subtitle: "迷ったときの辞典と、思いがけない着火点。",
    tools: [
      {
        title: "画像タグ辞典",
        description:
          "AI画像生成で使うタグを、表現や目的から探せるリファレンスです。",
        href: "https://nyuriwossan.github.io/ai-image-tag-dictionary/",
        label: "TAG DICTIONARY",
      },
      {
        title: "創作アイデアガチャ",
        description:
          "設定やモチーフを偶然に任せ、創作の行き詰まりに風穴を開けます。",
        href: "https://nyuriwossan.github.io/creative-idea-gacha/",
        label: "IDEA GACHA",
      },
    ],
  },
];
