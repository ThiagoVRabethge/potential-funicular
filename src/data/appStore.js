import { create } from 'zustand'

const useAppStore = create((set) => ({
  appName: "",

  appDescription: "",

  appLink: "",

  setAppName: (newAppName) => set(() => ({ appName: newAppName })),

  setAppDescription: (newAppDescription) => set(() => ({ appDescription: newAppDescription })),

  setAppLink: (newAppLink) => set(() => ({ appLink: newAppLink })),

  resetState: () => set(() => ({ appName: "", appDescription: "", appLink: "" })),
}))

export default useAppStore
