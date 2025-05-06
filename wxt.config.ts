import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    default_locale: "en",
    name: "__MSG_extName__",
    description: "__MSG_extDescription__",
  },
  modules: ["@wxt-dev/module-react", "@wxt-dev/i18n/module"],
  webExt: {
    disabled: true,
  },
})
