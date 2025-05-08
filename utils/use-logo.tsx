import { webSearchEngines } from "@/utils/types"

import React from "react"

function useEngineLogo(searchEngineName: string) {
  for (const engine of Object.values(webSearchEngines)) {
    if (engine.name === searchEngineName) {
      const logo = engine.logo
      if (React.isValidElement(logo)) {
        const svgLogo = logo as React.ReactElement<React.SVGProps<SVGSVGElement>>
        const prevClass = (svgLogo.props && svgLogo.props.className) || ""
        return React.cloneElement(svgLogo, {
          className: `${prevClass} w-6 h-6`.trim(),
        })
      }
      return logo
    }
  }
  return null
}

export default useEngineLogo
