export type searchEngine =
  | "Google"
  | "DuckDuckGo"
  | "Bing"
  | "YouTube"
  | "Yahoo"
  | "Yandex"
  | "Reddit"
  | "Twitter"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Pinterest"

export const webSearchEngines = {
  google: {
    name: "Google",
    symbol: "!g",
    url: "https://www.google.com/search?q={query}",
  },
  duckduckgo: {
    name: "DuckDuckGo",
    symbol: "!d",
    url: "https://duckduckgo.com/?q={query}",
  },
  bing: {
    name: "Bing",
    symbol: "!b",
    url: "https://www.bing.com/search?q={query}",
  },
  youtube: {
    name: "YouTube",
    symbol: "!yt",
    url: "https://www.youtube.com/results?search_query={query}",
  },
  yahoo: {
    name: "Yahoo",
    symbol: "!y",
    url: "https://search.yahoo.com/search?p={query}",
  },
  yandex: {
    name: "Yandex",
    symbol: "!yx",
    url: "https://yandex.com/search/?text={query}",
  },
  reddit: {
    name: "Reddit",
    symbol: "!r",
    url: "https://www.reddit.com/search/?q={query}",
  },
  twitter: {
    name: "Twitter",
    symbol: "!t",
    url: "https://x.com/search?q={query}",
  },
  facebook: {
    name: "Facebook",
    symbol: "!fb",
    url: "https://www.facebook.com/search/top/?q={query}",
  },
  instagram: {
    name: "Instagram",
    symbol: "!ig",
    url: "https://www.instagram.com/explore/search/keyword/?q={query}",
  },
  linkedin: {
    name: "LinkedIn",
    symbol: "!li",
    url: "https://www.linkedin.com/search/results/all/?keywords={query}",
  },
  pinterest: {
    name: "Pinterest",
    symbol: "!p",
    url: "https://www.pinterest.com/search/pins/?q={query}",
  },
}
