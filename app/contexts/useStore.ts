import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
  graphicsLevel: 3, //**? 0 = off, 1 = very low, 2 = low, 3 = medium, 4 = high, 5 = ultimate */
  toggleGraphicsLevel: (level) => set(() => ({ graphicsLevel: level })),
})

let userStore = (set) => ({
  name: 'Adam',
  setName: (name) => set(() => ({ name: name })),
})

let interfaceStore = () => ({
  cursorType: false,
})

// settingsStore = devtools(settingsStore)

let SetSettingsStore = persist(settingsStore, { name: 'user_settings' })
let SetUserStore = persist(userStore, {
  name: 'user_info',
  // getStorage: () => sessionStorage
})
let SetInterfaceStore = persist(interfaceStore, { name: 'interface' })

export const useSettingsStore = create(SetSettingsStore)
export const useUserStore = create(SetUserStore)
export const useInterfaceStore = create(SetInterfaceStore)