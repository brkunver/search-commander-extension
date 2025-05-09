function App() {
  function openHelp() {
    browser.tabs.create({ url: browser.runtime.getURL("/help.html") })
  }

  return (
    <div className="min-w-[300px] p-4 flex flex-col gap-2 items-center">
      <h1 className="text-2xl font-bold">Search Commander</h1>
      <p className="text-lg">
        Press <kbd className="font-bold">Alt + S</kbd> to open the search bar
      </p>
      <button
        onClick={openHelp}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Help
      </button>
    </div>
  )
}

export default App
