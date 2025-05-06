import { defineConfig } from "wxt"
import tailwindcss from "@tailwindcss/vite"

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    default_locale: "en",
    name: "__MSG_extName__",
    description: "__MSG_extDescription__",
    commands: {
      "toggle-search": {
        description: "Toggle Search Bar",
        suggested_key: {
          default: "Alt+S",
        },
      },
    },
  },
  modules: ["@wxt-dev/module-react", "@wxt-dev/i18n/module"],
  webExt: {
    disabled: true,
  },
  vite: () => ({
    plugins: [tailwindcss() as any],
  }),
})
