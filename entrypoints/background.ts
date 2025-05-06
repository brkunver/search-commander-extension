export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log("Extension installed")
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
