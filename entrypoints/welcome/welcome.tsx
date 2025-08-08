import { i18n } from "#imports"

export default function Welcome() {
  function openShortcuts() {
    browser.tabs.create({ url: "chrome://extensions/shortcuts" })
  }

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col items-center justify-center font-roboto p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-4">{i18n.t("welcome.title")}</h1>
        <p className="text-xl text-white/80 mb-8">{i18n.t("welcome.subtitle")}</p>
        <div className="bg-neutral-800 border border-white/20 rounded-lg p-6 mb-8">
          <p className="text-lg mb-2">{i18n.t("welcome.shortcut_info")}</p>
          <div className="inline-flex items-center gap-2">
            <kbd className="bg-neutral-700 text-white font-sans text-lg font-semibold px-3 py-1 rounded-md border-b-2 border-neutral-600">
              Alt
            </kbd>
            <span className="text-xl">+</span>
            <kbd className="bg-neutral-700 text-white font-sans text-lg font-semibold px-3 py-1 rounded-md border-b-2 border-neutral-600">
              S
            </kbd>
          </div>
        </div>
        <p className="text-lg text-white/80 mb-6">{i18n.t("welcome.change_shortcut_info")}</p>
        <button
          onClick={openShortcuts}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          {i18n.t("welcome.button_text")}
        </button>
      </div>
    </div>
  )
}
