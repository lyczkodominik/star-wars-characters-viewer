export const state = () => ({})

export const mutations = {
  initialiseStore (state) {
    if (process.client && localStorage.getItem('store')) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      )
    }
  }
}
