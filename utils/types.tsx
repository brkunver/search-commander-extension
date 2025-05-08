import DuckDuckGo from "~/assets/logos/duckduckgo-logo"
import Google from "~/assets/logos/google-logo"
import Bing from "~/assets/logos/bing-logo"
import YouTube from "~/assets/logos/youtube-logo"
import Yandex from "~/assets/logos/yandex-logo"
import Reddit from "~/assets/logos/reddit-logo"
import Twitter from "~/assets/logos/twitter-logo"
import Facebook from "~/assets/logos/facebook-logo"
import Instagram from "~/assets/logos/instagram-logo"
import LinkedIn from "~/assets/logos/linkedin-logo"
import Pinterest from "~/assets/logos/pinterest-logo"
import Yahoo from "~/assets/logos/yahoo-logo"

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
    logo: <Google />,
  },
  duckduckgo: {
    name: "DuckDuckGo",
    symbol: "!d",
    url: "https://duckduckgo.com/?q={query}",
    logo: <DuckDuckGo />,
  },
  bing: {
    name: "Bing",
    symbol: "!b",
    url: "https://www.bing.com/search?q={query}",
    logo: <Bing />,
  },
  youtube: {
    name: "YouTube",
    symbol: "!yt",
    url: "https://www.youtube.com/results?search_query={query}",
    logo: <YouTube />,
  },
  yahoo: {
    name: "Yahoo",
    symbol: "!y",
    url: "https://search.yahoo.com/search?p={query}",
    logo: <Yahoo />,
  },
  yandex: {
    name: "Yandex",
    symbol: "!yx",
    url: "https://yandex.com/search/?text={query}",
    logo: <Yandex />,
  },
  reddit: {
    name: "Reddit",
    symbol: "!r",
    url: "https://www.reddit.com/search/?q={query}",
    logo: <Reddit />,
  },
  twitter: {
    name: "Twitter",
    symbol: "!t",
    url: "https://x.com/search?q={query}",
    logo: <Twitter />,
  },
  facebook: {
    name: "Facebook",
    symbol: "!fb",
    url: "https://www.facebook.com/search/top/?q={query}",
    logo: <Facebook />,
  },
  instagram: {
    name: "Instagram",
    symbol: "!ig",
    url: "https://www.instagram.com/explore/search/keyword/?q={query}",
    logo: <Instagram />,
  },
  linkedin: {
    name: "LinkedIn",
    symbol: "!li",
    url: "https://www.linkedin.com/search/results/all/?keywords={query}",
    logo: <LinkedIn />,
  },
  pinterest: {
    name: "Pinterest",
    symbol: "!p",
    url: "https://www.pinterest.com/search/pins/?q={query}",
    logo: <Pinterest />,
  },
}
