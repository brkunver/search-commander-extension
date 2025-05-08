import { useState, useEffect } from "react"
import type { searchEngine } from "@/utils/types"
import { engineSelector } from "@/utils/engine-selector"
import { webSearchEngines } from "@/utils/types"
import { replaceQuery } from "@/utils/replace-query"
import { i18n } from "#imports"
import useEngineLogo from "@/utils/use-logo"

export default function App() {
  const [isActive, setIsActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  let searchEngine: searchEngine = engineSelector(searchTerm) || "Google"
  const Logo = useEngineLogo(searchEngine)

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
      className="font-roboto fixed inset-0 flex items-start justify-center text-white z-[2147483647] pt-[25vh]"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-200"
        onClick={() => setIsActive(false)}
      />
      <div className="relative w-full flex flex-col items-center gap-4 z-[2147483647]">
        <div
          id="search-commander-input"
          className="flex items-center gap-2 border antialiased border-white/30 rounded-2xl px-4 py-2 shadow mx-4 lg:mx-auto w-full lg:w-1/2 bg-neutral-900"
        >
          {Logo}
          <input
            type="text"
            autoFocus
            placeholder="!g search..."
            className="font-semibold text-2xl py-2 px-2 w-full focus:outline-none placeholder-white/70 text-white"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => {
              if (e.key === " ") {
                e.preventDefault()
                setSearchTerm(searchTerm + " ")
              }
            }}
          />
        </div>
      </div>
      <div className="fixed right-6 bottom-4 text-base px-3 py-1 rounded shadow-lg pointer-events-none select-none z-[2147483648] bg-black/60 backdrop-blur text-white">
        {i18n.t("content.info")}
      </div>
    </div>
  )
}
