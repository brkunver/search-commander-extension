import { isExtensionActive } from "@/utils/stores"

export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log("Extension installed")
    isExtensionActive
      .setValue(true)
      .then(() => {
        console.log("Extension active")
      })
      .catch(error => {
        console.error("Failed to set extension active", error)
      })
  })

  browser.commands.onCommand.addListener(command => {
    if (command === "toggle-search") {
      browser.tabs.query({ active: true, currentWindow: true }, tabs => {
        if (tabs[0]) {
          browser.tabs.sendMessage(tabs[0].id!, { action: "toggleSearchBar" })
        }
      })
    }
  })
})
