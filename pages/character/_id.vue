<template>
  <main class="container character-page">
    <h1>Character</h1>
    <p>Id: {{ id }}</p>
    <nuxt-link to="/characters">Return to characters list</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'Character',
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">
  .character-page{
    padding: 30px 15px;

    h1 {
      margin: 0 0 10px 0;
    }

    p{
      font-size: 1.6rem;
      margin: 0 0 10px 0;
    }

    a {
      display: inline-block;
      color: $c2 !important;
      background: $c7;
      border: 2px solid $c2;
      padding: 5px 10px;
      margin-right: 15px;
      transition: all .3s !important;
      font-weight: 500;

      &:hover {
        background: $c2 !important;
        color: $c4 !important;
      }
    }
  }
</style>
