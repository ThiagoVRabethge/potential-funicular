import { create } from 'zustand'

const useAppStore = create((set) => ({
  appName: "",

  appDescription: "",

  appLink: "",

  selectedApp: {},

  setAppName: (newAppName) => set(() => ({ appName: newAppName })),

  setAppDescription: (newAppDescription) => set(() => ({ appDescription: newAppDescription })),

  setAppLink: (newAppLink) => set(() => ({ appLink: newAppLink })),

  setSelectedApp: (newSelectedApp) => set(() => ({ selectedApp: newSelectedApp })),

  resetState: () => set(() => ({ appName: "", appDescription: "", appLink: "" })),
}))

export default useAppStore
