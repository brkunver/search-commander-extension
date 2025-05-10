import { useState } from "react"

interface ToggleProps {
  initialState?: boolean
  onChange?: (isToggled: boolean) => void
}

export function Toggle({ initialState = false, onChange }: ToggleProps) {
  const [isToggled, setIsToggled] = useState(initialState)

  const handleToggle = () => {
    const newState = !isToggled
    setIsToggled(newState)

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
