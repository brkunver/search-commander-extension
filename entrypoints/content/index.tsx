import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "~/assets/tailwind.css"

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",

  async main(ctx) {
    // 3. Define your UI
    const ui = await createShadowRootUi(ctx, {
      name: "search-commander-ui",
      position: "inline",
      anchor: "body",
      onMount: container => {
        const fontUrl = browser.runtime.getURL("/fonts/Roboto.ttf")
        // create style element
        const fontStyle = document.createElement("style")
        // create font face
        fontStyle.textContent = `
            @font-face {
              font-family: 'Roboto';
              src: url('${fontUrl}') format('truetype');
              font-weight: 100 900;
              font-style: normal;
            }
        `
        // append style element
        document.head.appendChild(fontStyle)

        const app = document.createElement("div")
        container.append(app)

        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(app)
        root.render(<App />)
        return root
      },
      onRemove: root => {
        // Unmount the root when the UI is removed
        root?.unmount()
      },
    })

    // 4. Mount the UI
    ui.mount()
  },
})
