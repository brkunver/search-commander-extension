import { storage } from "#imports"

const isExtensionActive = storage.defineItem<boolean>("local:isExtensionActive", {
  defaultValue: true,
})

export { isExtensionActive }
