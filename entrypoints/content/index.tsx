import ReactDOM from "react-dom/client"
import App from "./content.tsx"
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
        app.style.fontSize = "16px"
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

    // 4. Mount the UI after a delay
    setTimeout(() => {
      ui.mount()
    }, 100)
  },
})
