import { useState, useEffect } from "react"
import type { searchEngine } from "@/utils/types"
import { engineSelector } from "@/utils/engine-selector"

export default function App() {
  const [isActive, setIsActive] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  let searchEngine: searchEngine = engineSelector(searchTerm) || "Google"

  function toggleSearchBar() {
    setIsActive(!isActive)
  }

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

  browser.runtime.onMessage.addListener(message => {
    if (message.action === "toggleSearchBar") {
      toggleSearchBar()
    }
  })

  if (!isActive) return null

  return (
    <div
      id="search-commander"
      className="font-roboto fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 2147483647, position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
    >
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2147483646 }} onClick={() => setIsActive(false)} />
      <div className="relative p-8 rounded-lg shadow-lg" style={{ zIndex: 2147483647 }}>
        <h1 className="text-2xl font-bold">
          Search on <span className="font-bold">{searchEngine}</span>
        </h1>
        <input
          type="text"
          autoFocus
          className="border-1 text-white font-semibold border-white rounded-full p-2 w-full lg:w-1/2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="fixed right-6 bottom-4 text-xs text-white bg-black/70 px-3 py-1 rounded shadow-lg pointer-events-none select-none z-[2147483648]">
        Press Enter to search, Esc to close
      </div>
    </div>
  )
}
