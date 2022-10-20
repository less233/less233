import { defineStore } from 'pinia'
import type { UserState } from '@/stores/user/types'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    sessionId: '',
    userInfo: {}
  }),
  persist: true,
  getters: {
    getSessionId(): string {
      return this.sessionId
    },
    getUserInfo(): object | {} {
      return this.userInfo
    }
  },
  actions: {
    setSessionId(sessionId: string): void {
      this.sessionId = sessionId
    },
    setUserInfo(userInfo: object | {}): void {
      this.userInfo = userInfo
    }
  }
})
