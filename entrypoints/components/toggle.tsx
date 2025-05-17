import devlog from "@/utils/devlog"
import { useState } from "react"

interface ToggleProps {
  initialState?: boolean
  value?: boolean
  onChange?: (isToggled: boolean) => void
}

export default function Toggle({ initialState = false, value, onChange }: ToggleProps) {
  const [internalToggled, setInternalToggled] = useState(initialState)

  const isControlled = typeof value === "boolean"
  const isToggled = isControlled ? value : internalToggled

  const handleToggle = () => {
    const newState = !isToggled
    if (!isControlled) {
      setInternalToggled(newState)
    }
    devlog("Toggle state changed to", newState)
    if (onChange) {
      onChange(newState)
    }
  }

  return (
    <div
      onClick={handleToggle}
      className={`
        w-12 h-6 
        rounded-full 
        p-1 
        cursor-pointer 
        transition-colors 
        duration-300 
        ${isToggled ? "bg-blue-500" : "bg-gray-300"}
        relative
      `}
    >
      <div
        className={`
          w-4 h-4 
          bg-white 
          rounded-full 
          absolute 
          top-1/2 
          -translate-y-1/2 
          transition-transform 
          duration-300
          ${isToggled ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </div>
  )
}
