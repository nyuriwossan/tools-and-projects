export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://tools-and-projects-hub.nyuriwo.chatgpt.site";

export function pageHref(path: "/" | "/education" | "/creative") {
  if (!basePath) {
    return path;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${path}.html`;
}

export function assetHref(path: `/${string}`) {
  return `${basePath}${path}`;
}

/** 共有画像などに使う、公開サイト上の絶対URL */
export function absoluteAssetUrl(path: `/${string}`) {
  return new URL(assetHref(path), siteUrl).toString();
}
