import React from "react"
import ReactDOM from "react-dom/client"
import App from "./popup.tsx"
import "~/assets/tailwind.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
