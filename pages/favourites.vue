<template>
  <main class="container favourites-page">
    <h1>Favourites</h1>
  </main>
</template>

<script>
  export default {
    name: 'Favourites',
    computed: {
      list () {
        return this.$store.state.favourites.list
      }
    }
  }
</script>

<style scoped lang="scss">
  .favourites-page {
    height: 100%;
    padding: 30px 15px;

    h1 {
      margin: 0;
    }
  }
</style>
