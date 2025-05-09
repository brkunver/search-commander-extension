import { searchEngine, webSearchEngines } from "@/utils/types"

export default function engineSelector(searchTerm: string): searchEngine {
  const lowerTerm = searchTerm.toLowerCase()
  const parts = lowerTerm.split(" ")
  const command = parts[0]

  const engine = webSearchEngines.find(engine => engine.symbol === command)
  return engine ? engine.name : "Google"
}
