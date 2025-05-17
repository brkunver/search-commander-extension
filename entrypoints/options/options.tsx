import { webSearchEngines } from "@/utils/types"
import { i18n } from "#imports"
import useEngineLogo from "@/utils/use-logo"
import Toggle from "@/entrypoints/components/toggle"
import { useState, useEffect } from "react"
import { isExtensionActive } from "@/utils/stores"
import devlog from "@/utils/devlog"

function Options() {
  const [extensionState, setExtensionState] = useState<boolean | null>(null)

  useEffect(() => {
    const initializeState = async () => {
      try {
        const currentState = await isExtensionActive.getValue()
        devlog("Initial extension state:", currentState)
        setExtensionState(currentState)
      } catch (error) {
        devlog("Error fetching extension state:", error)
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

  if (extensionState === null) {
    return null
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
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
      <h1 className="text-2xl font-bold mb-6">{i18n.t("options.title")}</h1>
      <div className="space-y-4">
        {webSearchEngines.map(engine => (
          <div key={engine.name} className="flex items-center gap-4 p-3 bg-neutral-900 text-white rounded-lg">
            {useEngineLogo(engine.name)}
            <div>
              <h3 className="font-medium">{engine.name}</h3>
              <p className="text-sm">
                {i18n.t("options.shortcut")}: {engine.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Options
