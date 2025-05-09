import { webSearchEngines } from "@/utils/types"
import { i18n } from "#imports"
import useEngineLogo from "@/utils/use-logo"

export default function Help() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{i18n.t("help.title")}</h1>
      <div className="space-y-4">
        {webSearchEngines.map(engine => (
          <div key={engine.name} className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg">
            {useEngineLogo(engine.name)}
            <div>
              <h3 className="font-medium">{engine.name}</h3>
              <p className="text-sm text-gray-600">
                {i18n.t("help.shortcut")}: {engine.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
