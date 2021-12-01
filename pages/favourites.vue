<template>
  <main class="container favourites-page">
    <h1>Favourites</h1>
    <section>
      <List :list="list"/>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Favourites',
    middleware: 'synchroniseStore',
    computed: {
      list () {
        return this.$store.state.favourites.list
      }
    }
  }
</script>

<style scoped lang="scss">
  .favourites-page {
    padding: 30px 15px;

    h1 {
      margin: 0 0 10px 0;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 15px;
      width: 100%;
    }
  }
</style>
