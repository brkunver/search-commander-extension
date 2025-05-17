import { webSearchEngines } from "@/utils/types"
import { motion, AnimatePresence } from "motion/react"
import React from "react"

function useEngineLogo(searchEngineName: string) {
  for (const engine of Object.values(webSearchEngines)) {
    if (engine.name === searchEngineName) {
      const logo = engine.logo
      if (React.isValidElement(logo)) {
        const svgLogo = logo as React.ReactElement<React.SVGProps<SVGSVGElement>>
        const prevClass = (svgLogo.props && svgLogo.props.className) || ""
        const modifiedLogo = React.cloneElement(svgLogo, {
          className: `${prevClass} w-6 h-6 3xl:w-8 3xl:h-8 4xl:w-12 4xl:h-12`.trim(),
        })

        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={searchEngineName}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {modifiedLogo}
            </motion.div>
          </AnimatePresence>
        )
      }

      return (
        <AnimatePresence mode="wait">
          <motion.div
            key={searchEngineName}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {logo}
          </motion.div>
        </AnimatePresence>
      )
    }
  }
  return null
}

export default useEngineLogo
