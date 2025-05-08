import DuckDuckGo from "~/assets/logos/duckduckgo-logo"
import Google from "~/assets/logos/google-logo"
import Bing from "~/assets/logos/bing-logo"
import YouTube from "~/assets/logos/youtube-logo"
import Yandex from "~/assets/logos/yandex-logo"
import Reddit from "~/assets/logos/reddit-logo"
import XformerlyTwitter from "~/assets/logos/twitter-logo"
import Facebook from "~/assets/logos/facebook-logo"
import Instagram from "~/assets/logos/instagram-logo"
import LinkedIn from "~/assets/logos/linkedin-logo"
import Pinterest from "~/assets/logos/pinterest-logo"
import Yahoo from "~/assets/logos/yahoo-logo"
import { JSX } from "react"

export type searchEngine =
  | "Google"
  | "DuckDuckGo"
  | "Bing"
  | "YouTube"
  | "Yahoo"
  | "Yandex"
  | "Reddit"
  | "X"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Pinterest"

type searchEngineData = {
  name: searchEngine
  symbol: string
  url: string
  logo: JSX.Element
}

export const webSearchEngines: searchEngineData[] = [
  {
    name: "Yahoo",
    symbol: "!yh",
    url: "https://search.yahoo.com/search?p={query}",
    logo: <Yahoo />,
  },
  {
    name: "Yandex",
    symbol: "!yx",
    url: "https://yandex.com/search/?text={query}",
    logo: <Yandex />,
  },
  {
    name: "Facebook",
    symbol: "!fb",
    url: "https://www.facebook.com/search/top/?q={query}",
    logo: <Facebook />,
  },
  {
    name: "Instagram",
    symbol: "!ig",
    url: "https://www.instagram.com/explore/search/keyword/?q={query}",
    logo: <Instagram />,
  },
  {
    name: "LinkedIn",
    symbol: "!li",
    url: "https://www.linkedin.com/search/results/all/?keywords={query}",
    logo: <LinkedIn />,
  },
  {
    name: "Pinterest",
    symbol: "!p",
    url: "https://www.pinterest.com/search/pins/?q={query}",
    logo: <Pinterest />,
  },
  {
    name: "YouTube",
    symbol: "!y",
    url: "https://www.youtube.com/results?search_query={query}",
    logo: <YouTube />,
  },
  {
    name: "Google",
    symbol: "!g",
    url: "https://www.google.com/search?q={query}",
    logo: <Google />,
  },
  {
    name: "DuckDuckGo",
    symbol: "!d",
    url: "https://duckduckgo.com/?q={query}",
    logo: <DuckDuckGo />,
  },
  {
    name: "Bing",
    symbol: "!b",
    url: "https://www.bing.com/search?q={query}",
    logo: <Bing />,
  },
  {
    name: "Reddit",
    symbol: "!r",
    url: "https://www.reddit.com/search/?q={query}",
    logo: <Reddit />,
  },
  {
    name: "X",
    symbol: "!x",
    url: "https://x.com/search?q={query}",
    logo: <XformerlyTwitter />,
  },
]
