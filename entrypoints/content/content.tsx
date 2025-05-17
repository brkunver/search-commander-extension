import { useState, useEffect, useRef } from "react"

import type { searchEngine } from "@/utils/types"
import engineSelector from "@/utils/engine-selector"
import { webSearchEngines } from "@/utils/types"
import replaceQuery from "@/utils/replace-query"
import useEngineLogo from "@/utils/use-logo"
import { isExtensionActive } from "@/utils/stores"

import { AnimatePresence, motion } from "motion/react"

import { i18n } from "#imports"

export default function App() {
  const [isActive, setIsActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const [extensionState, setExtensionState] = useState(true)

  // search engine selector
  let searchEngine: searchEngine = engineSelector(searchTerm)
  const Logo = useEngineLogo(searchEngine)

  function toggleSearchBar() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    isExtensionActive.watch(value => setExtensionState(value))

    // init extension state
    isExtensionActive.getValue().then(value => {
      setExtensionState(value)
    })
  }, [])

  // focus input when search bar is active
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  // close search bar when escape key is pressed
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

  // listen for shortcut key
  browser.runtime.onMessage.addListener(message => {
    if (message.action === "toggleSearchBar") {
      toggleSearchBar()
    }
  })

  useEffect(() => {
    if (!isActive) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const searchEngineObj = webSearchEngines.find(engine => engine.name == searchEngine)
        const searchWords = searchTerm.trim().split(" ")
        const isCommand = searchWords[0].startsWith("!")
        const query = isCommand ? searchWords.slice(1).join(" ") : searchTerm
        if (searchEngineObj) {
          const url = replaceQuery(searchEngineObj.url, query)
          window.open(url, "_blank")
        }
        setSearchTerm("")
        setIsActive(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isActive, searchTerm])

  return (
    <AnimatePresence>
      {isActive && extensionState && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          id="search-commander"
          className="font-roboto fixed inset-0 flex items-start justify-center text-white z-[2147483647] pt-[25vh]"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsActive(false)} />
          <div
            className="relative w-full flex flex-col items-center gap-[16px] z-[2147483647]"
            style={{ fontSize: "16px" }}
          >
            <div
              id="search-commander-input"
              className="flex items-center gap-2 border antialiased border-white/30 rounded-2xl px-4 py-2 3xl:py-4 3xl:px-4 4xl:py-6 4xl:px-6 shadow mx-4 lg:mx-auto w-full lg:w-1/2 bg-neutral-900 box-border"
            >
              {Logo}
              <input
                type="text"
                ref={inputRef}
                autoFocus
                placeholder="!g search..."
                className="font-semibold text-[24px] 3xl:text-[32px] 4xl:text-[64px] py-2 px-2 3xl:py-4 3xl:px-4 4xl:py-6 4xl:px-6 w-full h-full focus:outline-none placeholder-white/70 text-white bg-transparent box-border"
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}
