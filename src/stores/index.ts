import { defineStore } from 'pinia'

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    loading: false as Boolean,
  }),
  actions: {
    setIsLoading(state: boolean) {
      setTimeout(() => {
        this.loading = state as boolean;
      }, 1000)
    }
  }
})
