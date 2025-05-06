import { useState, useEffect } from "react"

export default function App() {
  const [isActive, setIsActive] = useState(false)

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
    <div id="search-commander-ui" className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsActive(false)} />
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <h1>Search Commander</h1>
        <p>Search the web using a keyboard shortcut</p>
      </div>
    </div>
  )
}
