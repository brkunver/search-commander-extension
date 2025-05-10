import { i18n } from "#imports"

function App() {
  function openOptions() {
    browser.runtime.openOptionsPage()
  }

  return (
    <div className="min-w-[300px] p-4 flex flex-col gap-2 items-center">
      <h1 className="text-2xl font-bold">{i18n.t("extName")}</h1>
      <p className="text-lg">{i18n.t("popup.hint", ["Alt + s"])}</p>
      <button
        onClick={openOptions}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {i18n.t("popup.options")}
      </button>
    </div>
  )
}

export default App
