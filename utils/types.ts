export type searchEngine = "Google" | "DuckDuckGo" | "Bing" | "YouTube"
export const webSearchEngines = {
  google: {
    name: "Google",
    symbol: "!g",
    url: "https://www.google.com/search?q={query}",
  },
  duckduckgo: {
    name: "DuckDuckGo",
    symbol: "!d",
    url: "https://www.duckduckgo.com/?q={query}",
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
}
