export const state = () => ({
  list: []
})

export const mutations = {
  add (state, character) {
    console.log('add', character);
    state.list.push(character)
  },
  remove (state, url) {
    console.log('remove', url);

    const elementIndex = state.list.findIndex(element => element.url === url)
    state.list.splice(elementIndex, 1)
  }
}
