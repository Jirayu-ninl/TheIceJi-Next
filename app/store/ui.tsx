import create from 'zustand'

const store = (set) => ({
  performance: 3,
  setPerformances: (level: number) => set(() => ({ performance: level })),
  dark: true,
  toggleDark: (state) => set(() => ({ dark: !state.dark })),
  cursor: false,
  setCursor: (cursor: string | boolean) => set(() => ({ cursor: cursor })),
  audio: false,
  setAudio: (audio) => set(() => ({ audio: audio })),
})

const store_UI = create(store)

export default store_UI
