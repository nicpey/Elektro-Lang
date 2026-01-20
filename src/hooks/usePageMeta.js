import { useEffect } from "react";

const ensureTag = (selector, create) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  return tag;
};

const setCanonical = (href) => {
  const canonical = ensureTag('link[rel="canonical"]', () => {
    const link = document.createElement("link");
    link.rel = "canonical";
    return link;
  });
  canonical.href = href || "";
};

const setMeta = (name, content) => {
  const meta = ensureTag(`meta[name="${name}"]`, () => {
    const tag = document.createElement("meta");
    tag.name = name;
    return tag;
  });
  meta.content = content || "";
};

export const usePageMeta = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    setMeta("description", description);
    setMeta("keywords", keywords);
    setCanonical(canonical);
  }, [title, description, keywords, canonical]);
};
