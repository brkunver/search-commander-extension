import { searchEngine } from "@/utils/types"

export function engineSelector(searchTerm: string): searchEngine {
  if (
    searchTerm.startsWith("!yt") ||
    searchTerm.startsWith("!Yt") ||
    searchTerm.startsWith("!yT") ||
    searchTerm.startsWith("!YT")
  ) {
    return "YouTube"
  } else if (
    searchTerm.startsWith("!yx") ||
    searchTerm.startsWith("!Yx") ||
    searchTerm.startsWith("!yX") ||
    searchTerm.startsWith("!YX")
  ) {
    return "Yandex"
  } else if (
    searchTerm.startsWith("!fb") ||
    searchTerm.startsWith("!Fb") ||
    searchTerm.startsWith("!fB") ||
    searchTerm.startsWith("!FB")
  ) {
    return "Facebook"
  } else if (
    searchTerm.startsWith("!ig") ||
    searchTerm.startsWith("!Ig") ||
    searchTerm.startsWith("!iG") ||
    searchTerm.startsWith("!IG")
  ) {
    return "Instagram"
  } else if (
    searchTerm.startsWith("!li") ||
    searchTerm.startsWith("!Li") ||
    searchTerm.startsWith("!lI") ||
    searchTerm.startsWith("!LI")
  ) {
    return "LinkedIn"
  } else if (searchTerm.startsWith("!g") || searchTerm.startsWith("!G")) {
    return "Google"
  } else if (searchTerm.startsWith("!d") || searchTerm.startsWith("!D")) {
    return "DuckDuckGo"
  } else if (searchTerm.startsWith("!b") || searchTerm.startsWith("!B")) {
    return "Bing"
  } else if (searchTerm.startsWith("!y") || searchTerm.startsWith("!Y")) {
    return "Yahoo"
  } else if (searchTerm.startsWith("!r") || searchTerm.startsWith("!R")) {
    return "Reddit"
  } else if (
    searchTerm.startsWith("!t") ||
    searchTerm.startsWith("!T") ||
    searchTerm.startsWith("!x") ||
    searchTerm.startsWith("!X")
  ) {
    return "Twitter"
  } else if (searchTerm.startsWith("!p") || searchTerm.startsWith("!P")) {
    return "Pinterest"
  }
  return "Google"
}
