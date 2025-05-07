import { useState, useEffect } from "react"
import type { searchEngine } from "@/utils/types"
import { engineSelector } from "@/utils/engine-selector"
import { webSearchEngines } from "@/utils/types"
import { replaceQuery } from "@/utils/replace-query"

export default function App() {
  const [isActive, setIsActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  let searchEngine: searchEngine = engineSelector(searchTerm) || "Google"

  function toggleSearchBar() {
    setIsActive(!isActive)
  }

  // register escape key
  useEffect(() => {
    if (!isActive) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsActive(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive])

  // listen for messages from background script
  browser.runtime.onMessage.addListener(message => {
    if (message.action === "toggleSearchBar") {
      toggleSearchBar()
    }
  })

  // listen for enter key
  useEffect(() => {
    if (!isActive) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const lowerCaseSearchEngine = searchEngine.toLowerCase() as keyof typeof webSearchEngines
        const searchWords = searchTerm.trim().split(" ")
        const isCommand = searchWords[0].startsWith("!")
        const query = isCommand ? searchWords.slice(1).join(" ") : searchTerm
        const url = replaceQuery(webSearchEngines[lowerCaseSearchEngine].url, query)
        window.open(url, "_blank")
        setSearchTerm("")
        setIsActive(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive, searchTerm])

  if (!isActive) return null

  return (
    <div
      id="search-commander"
      className="font-roboto fixed inset-0 flex items-center justify-center text-white"
      style={{ zIndex: 2147483647, position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
    >
      <div className="absolute inset-0 bg-black/90" style={{ zIndex: 2147483646 }} onClick={() => setIsActive(false)} />
      <div className="relative w-full flex flex-col items-center gap-4" style={{ zIndex: 2147483647 }}>
        <h1 className="text-2xl font-semibold">
          Search on <span className="font-bold">{searchEngine}</span>
        </h1>
        <input
          type="text"
          autoFocus
          placeholder="!g search..."
          className="border-4 font-semibold text-lg border-white rounded-full py-2 px-4 w-full lg:w-1/2 focus:outline-none"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="fixed right-6 bottom-4 text-base px-3 py-1 rounded shadow-lg pointer-events-none select-none z-[2147483648]">
        Press <kbd className="font-bold">Enter</kbd> to search, <kbd className="font-bold">Esc</kbd> to close
      </div>
    </div>
  )
}
