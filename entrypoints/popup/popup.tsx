import { i18n } from "#imports"
import { isExtensionActive } from "@/utils/stores"
import Toggle from "@/entrypoints/components/toggle"
import { useEffect, useState } from "react"
import devlog from "@/utils/devlog"

function App() {
  const [extensionState, setExtensionState] = useState<boolean | null>(null)

  useEffect(() => {
    const initializeState = async () => {
      try {
        const currentState = await isExtensionActive.getValue()
        devlog("Initial extension state:", currentState)
        setExtensionState(currentState)
      } catch (error) {
        devlog("Error fetching extension state:", error)
        // Fallback to default state
        setExtensionState(true)
      }
    }

    initializeState()

    const unsubscribe = isExtensionActive.watch(value => {
      devlog("Extension state changed to:", value)
      setExtensionState(value)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  function openOptions() {
    browser.runtime.openOptionsPage()
  }

  // Prevent rendering until state is initialized
  if (extensionState === null) {
    return null
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
      <div className="flex items-center gap-2">
        <Toggle
          value={extensionState}
          onChange={value => {
            devlog("Toggle value changed to:", value)
            isExtensionActive.setValue(value)
          }}
        />
        <span className="text-sm">
          {extensionState ? i18n.t("popup.extensionStatus.active") : i18n.t("popup.extensionStatus.inactive")}
        </span>
      </div>
    </div>
  )
}

export default App
