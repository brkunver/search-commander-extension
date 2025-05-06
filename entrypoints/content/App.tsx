import { useState } from "react"

export default function App() {
  const [isActive, setIsActive] = useState(false)

  const toggleSearchBar = () => {
    setIsActive(!isActive)
  }

  browser.runtime.onMessage.addListener(message => {
    if (message.action === "toggleSearchBar") {
      toggleSearchBar()
    }
  })

  if (!isActive) return null

  return (
    <div id="search-commander-ui" className="fixed inset-0 flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1>Search Commander</h1>
        <p>Search the web using a keyboard shortcut</p>
      </div>
    </div>
  )
}
