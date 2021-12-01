export default function ({ store }) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  })
}
