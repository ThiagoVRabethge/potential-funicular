import { create } from 'zustand'

const useUserSessionStore = create((set) => ({
  userSession: {},

  setUserSession: (newUserSession) => set(() => ({ userSession: newUserSession })),

  resetState: () => set(() => ({ userSession: {} })),
}))

export default useUserSessionStore
