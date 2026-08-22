export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
