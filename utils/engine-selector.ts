import { searchEngine } from "./types"

export function engineSelector(searchTerm: string): searchEngine {
  // if it starts with !g or !G
  if (searchTerm.startsWith("!g") || searchTerm.startsWith("!G")) {
    return "Google"
  }
  // if it starts with !d or !D
  else if (searchTerm.startsWith("!d") || searchTerm.startsWith("!D")) {
    return "DuckDuckGo"
  }
  // if it starts with !b or !B
  else if (searchTerm.startsWith("!b") || searchTerm.startsWith("!B")) {
    return "Bing"
  }
  // if it starts with !yt or !Yt
  else if (
    searchTerm.startsWith("!yt") ||
    searchTerm.startsWith("!Yt") ||
    searchTerm.startsWith("!yT") ||
    searchTerm.startsWith("!YT")
  ) {
    return "YouTube"
  }
  // default to Google
  return "Google"
}
