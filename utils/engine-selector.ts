import { searchEngine, webSearchEngines } from "@/utils/types"

export default function engineSelector(searchTerm: string): searchEngine {
  const lowerTerm = searchTerm.toLowerCase()
  const engine = webSearchEngines.find(engine => lowerTerm.startsWith(engine.symbol))
  return engine ? engine.name : "Google"
}
