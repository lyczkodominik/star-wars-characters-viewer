export const state = () => ({
  list: []
})

export const mutations = {
  add (state, character) {
    state.list.push(character)
  },
  remove (state, url) {
    const elementIndex = state.list.findIndex(element => element.url === url)
    state.list.splice(elementIndex, 1)
  }
}
