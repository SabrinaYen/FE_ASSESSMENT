import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    loading: false as Boolean,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    isLoading: (state) => { return { ...state, loading: state } },
  },
  actions: {
    increment() {
      this.counter++
    },
    handleIsLoading() {
      this.isLoading;
    }
  }
})
